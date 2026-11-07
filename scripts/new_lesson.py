#!/usr/bin/env python3
"""Scaffold an OPTIONAL lesson and register it in MkDocs without overwriting."""
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--week', type=int, required=True)
parser.add_argument('--day', type=int, required=True)
parser.add_argument('--slug', required=True, help='lowercase words separated by hyphens')
args = parser.parse_args()

if not 1 <= args.week <= 12 or not 1 <= args.day <= 5:
    parser.error('week must be 1..12; day must be 1..5')
if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', args.slug):
    parser.error('invalid slug')

plan = json.loads((ROOT/'curriculum/schedule.json').read_text(encoding='utf-8'))
title = plan['weeks'][args.week - 1]['days'][args.day - 1]['title']
filename = f'week-{args.week:02d}-day-{args.day:02d}-{args.slug}.md'
output = ROOT / 'docs' / 'lessons' / filename
if output.exists():
    parser.error(f'{filename} already exists')

base = (ROOT/'templates'/'lesson.md').read_text(encoding='utf-8')
base = (base.replace('[Título do aprofundamento]', title)
            .replace('week-XX', f'week-{args.week:02d}')
            .replace('day-YY', f'day-{args.day:02d}'))
index = ROOT / 'docs' / 'lessons' / 'index.md'
config = ROOT / 'mkdocs.yml'
nav = config.read_text(encoding='utf-8')
old = '  - Aprofundamentos: lessons/index.md'
new = '  - Aprofundamentos:\n      - Índice: lessons/index.md'
if old in nav:
    nav = nav.replace(old, new, 1)
if '  - Aprofundamentos:\n' not in nav:
    parser.error('Aprofundamentos navigation not found')
anchor = '  - Módulos:'
insert_at = nav.find(anchor)
if insert_at < 0:
    parser.error('Modules navigation not found')
line = f'      - "Semana {args.week:02d} Dia {args.day:02d} — {args.slug}": lessons/{filename}'
nav = nav[:insert_at] + line + '\n' + nav[insert_at:]

output.write_text(base, encoding='utf-8')
config.write_text(nav, encoding='utf-8')
with index.open('a', encoding='utf-8') as f:
    f.write(f'\n- [Semana {args.week:02d}, Dia {args.day:02d} — {title}]({filename}) — RASCUNHO.\n')
print('Created', output.relative_to(ROOT), 'and updated lesson index + mkdocs.yml')
