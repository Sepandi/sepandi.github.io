#!/bin/sh
cd "$(dirname "$0")"
git add -A
git commit -m "Update"
git push -u origin main
