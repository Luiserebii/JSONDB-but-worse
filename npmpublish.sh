#!/bin/bash

# Make temporary directory, hold returned filepath
TEMPDIR="$(mktemp -d)"

# Setup a trap to clear tempdir and execute on EXIT
trap "rm -rf $TEMPDIR" EXIT

# Copy necessary files over
cp package.json README.md LICENSE dist/* $TEMPDIR

# Change directory into temporary directory
cd $TMPDIR

# npm publish
npm publish

# Cleanup temporary directory
rm -rf $TEMPDIR
