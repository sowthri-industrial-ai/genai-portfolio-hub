#!/usr/bin/env bash
# Fetches ledger.jsonl from project-00 repo for local PCP preview
set -euo pipefail

mkdir -p control-plane/src/content/ledger
curl -sfL https://raw.githubusercontent.com/sowthri-industrial-ai/project-00-ground-zero/main/as-built/ledger.jsonl \
  > control-plane/src/content/ledger/ledger.jsonl || \
  echo "[]" > control-plane/src/content/ledger/ledger.jsonl

echo "✓ Ledger fetched"
