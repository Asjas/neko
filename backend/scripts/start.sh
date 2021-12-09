#!/bin/bash

# Start the first process
./node_modules/.bin/keystone prisma migrate deploy

# Start the second process
./node_modules/.bin/keystone start &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
