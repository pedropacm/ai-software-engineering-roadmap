#!/usr/bin/env python3
"""Create 12 milestone issues. Default: only print proposed issues (safe)."""
import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--execute', action='store_true', help='write issues to the authenticated GitHub repository')
args = parser.parse_args()
plan = json.loads((ROOT / 'curriculum' / 'schedule.json').read_text(encoding='utf-8'))
if args.execute and not shutil.which('gh'):
    sys.exit('gh not installed')

for week in plan['weeks']:
    n = week['number']
    title = f'[Roadmap] Semana {n:02d} — {week["title"]}'
    rows = '\n'.join(
        f'- [ ] Dia {day["number"]:02d} — `{day["deliverable"]}`'
        f' (`docs/weeks/week-{n:02d}/day-{day["number"]:02d}.md`)'
        for day in week['days']
    )
    body = f'**Sessões:** 5 dias × 3h = 15h\n\n{rows}\n\n**Aceite:** {week["days"][-1]["acceptance"]}\n'
    if args.execute:
        result = subprocess.run(['gh', 'issue', 'create', '--title', title, '--body', body], check=False)
        if result.returncode:
            sys.exit(f'Issue creation failed for week {n}; remaining not created')
    else:
        print(f'{title}\n{body}\n---')
if not args.execute:
    print('DRY RUN ONLY: pass --execute after verifying the authenticated repository.')
