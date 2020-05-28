#!/bin/sh

yarn install

if [ ${mode} == "DEV" ]; then
    yarn run dev
else
    yarn build
    yarn start
fi
