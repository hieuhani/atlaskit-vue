#!/usr/bin/env bash
set -e

# Cleanup
echo 'Cleanup...'
rm -rf dist

echo 'Compile JS...'
rollup -c scripts/rollup.config.js --environment BUILD:production 
echo 'Done.'
echo ''

echo 'Compile CSS...'
postcss dist/atlaskit-vue.css -o dist/atlaskit-vue.css --config scripts/postcss.config.js
        
echo 'Done.'
echo ''