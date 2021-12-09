#!/bin/bash

./node_modules/.bin/keystone prisma migrate deploy

./node_modules/.bin/keystone start &

wait -n

exit $?
