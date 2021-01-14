#!/bin/bash

echo "[leetcode web gen] building.."
node build.js
echo "[leetcode web gen] built"
git add .
echo "[leetcode web gen] committing with message: $2.."
git commit -m "$2"
echo "[leetcode web gen] committed"
git push origin gh-pages
echo "[leetcode web gen] pushed"
