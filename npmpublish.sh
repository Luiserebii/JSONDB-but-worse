#!/bin/bash

# Make temporary directory, hold returned filepath
TEMPDIR="$(mktemp -d)"

# Setup a trap to execute on EXIT
trap "{ rm -rf $TEMPDIR }" EXIT

# Copy necessary files over

# Change directory into temporary directory

# npm publish

# Cleanup temporary directory
