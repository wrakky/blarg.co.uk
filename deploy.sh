#!/usr/bin/env bash

dt=`date '+%-d %B %Y %H:%M:%S'`
commitMessage="Site updated at ${dt}";

gulp generate --minify
cd _site
git add -A
git commit -m "${commitMessage}"
git push