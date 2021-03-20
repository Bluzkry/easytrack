#!/bin/bash

[ -d build ] && rm -r build
cd client
npm install
npm run build
cp -r build ../
