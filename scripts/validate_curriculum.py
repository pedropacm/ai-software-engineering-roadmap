#!/usr/bin/env python3
"""Validate the 12-week learning contract using only Python stdlib."""
from pathlib import Path
import json
import sys

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / 'curriculum' / 'schedule.json'
errors = []
try:
    plan = json.loads(source.read_text(encoding='utf-8'))
except Exception as exc:
    print(f'ERROR loading schedule: {exc}')
    sys.exit(1)

course = plan.get('course', {})
modules = plan.get('modules', [])
weeks = plan.get('weeks', [])
if (course.get('weeks'), course.get('days_per_week'), course.get('hours_per_day'), course.get('total_hours')) != (12, 5, 3, 180):
    errors.append('course time contract must remain 12 x 5 x 3 = 180h')
if len(modules) != 9 or len(weeks) != 12:
    errors.append(f'expected 9 modules and 12 weeks, got {len(modules)} and {len(weeks)}')
ids = [m.get('id') for m in modules]
if len(set(ids)) != len(ids): errors.append('duplicate module IDs')
week_map = {}
for m in modules:
    mid = m.get('id')
    for attr in ('title', 'objective', 'scope', 'project', 'done'):
        if not m.get(attr): errors.append(f'{mid}: missing {attr}')
    if not (ROOT / 'docs' / 'modules' / f'{mid}.md').exists():
        errors.append(f'{mid}: missing module page')
    for w in m.get('weeks', []):
        if w in week_map: errors.append(f'week {w} assigned to more than one module')
        week_map[w] = mid

if sorted(week_map) != list(range(1, 13)):
    errors.append('each week 1..12 must belong to exactly one module')
for index, week in enumerate(weeks, 1):
    n = week.get('number')
    if n != index: errors.append(f'expected week {index}, got {n}')
    if week_map.get(n) != week.get('module_id'):
        errors.append(f'week {n}: module mismatch')
    days = week.get('days', [])
    if len(days) != 5: errors.append(f'week {n}: must have five days')
    week_dir = ROOT / 'docs' / 'weeks' / f'week-{n:02d}'
    if not (week_dir / 'index.md').exists(): errors.append(f'week {n}: missing overview')
    for dno, day in enumerate(days, 1):
        if day.get('number') != dno: errors.append(f'week {n}: day numbers out of order')
        for key in ('title', 'concepts', 'activity', 'deliverable', 'acceptance'):
            if not day.get(key): errors.append(f'week {n} day {dno}: missing {key}')
        file = week_dir / f'day-{dno:02d}.md'
        if not file.exists():
            errors.append(f'missing {file.relative_to(ROOT)}')
            continue
        contents = file.read_text(encoding='utf-8')
        for heading in ('## Objetivo do dia', '## Conceitos que preciso dominar',
                        '## Roteiro de 3 horas', '## Entregável', '## Critério de conclusão'):
            if heading not in contents:
                errors.append(f'{file.relative_to(ROOT)}: missing {heading}')
        if day['deliverable'] not in contents or day['acceptance'] not in contents:
            errors.append(f'{file.relative_to(ROOT)}: out of sync with minimum curriculum metadata')

if errors:
    print('CURRICULUM VALIDATION FAILED:')
    for issue in errors: print(f'  - {issue}')
    sys.exit(1)
print(f'PASS: {len(modules)} modules, {len(weeks)} weeks, {sum(len(x["days"]) for x in weeks)} sessions, 180 hours')
