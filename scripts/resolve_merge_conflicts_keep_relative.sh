#!/usr/bin/env bash
set -euo pipefail

# Resolve git conflict markers by keeping the CURRENT block (HEAD)
# Useful when incoming changes revert relative paths to absolute paths.

files=$(rg -l "^(<<<<<<<|=======|>>>>>>>)" . || true)
if [[ -z "${files}" ]]; then
  echo "No conflict markers found."
  exit 0
fi

python3 - <<'PY'
from pathlib import Path
import re

pattern = re.compile(r"<<<<<<< .*?\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?\n", re.S)

for path in Path('.').rglob('*'):
    if str(path).startswith('scripts/'):
        continue
    if not path.is_file():
        continue
    try:
        text = path.read_text()
    except Exception:
        continue
    if '<<<<<<< ' not in text:
        continue
    new = text
    while True:
        m = pattern.search(new)
        if not m:
            break
        # keep current (group 1)
        new = new[:m.start()] + m.group(1) + "\n" + new[m.end():]
    path.write_text(new)
    print(f"resolved: {path}")
PY

echo "Done. Run: git add -A && git commit"
