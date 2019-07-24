#!/bin/bash

# Grab current working directory
CURRDIR=$PWD

# Make temporary directory, hold returned filepath
TEMPDIR="$(mktemp -d)"

# Setup a trap to clear tempdir and execute on EXIT
trap "rm -rf $TEMPDIR" EXIT

# Copy necessary files over
cp -r package.json README.md LICENSE dist/* $TEMPDIR

# Change directory into temporary directory
cd $TEMPDIR

# npm pack
npm pack

# move packed thing
mv jsondb-but-worse*.tgz $CURRDIR

# Cleanup temporary directory
rm -rf $TEMPDIR
