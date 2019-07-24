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

# Execute - based on flag, either pack, or publish
if [ "$1" == "--pack" ]; then
  npm pack

  # move packed thing
  mv jsondb-but-worse*.tgz $CURRDIR

  # Cleanup temporary directory
  rm -rf $TEMPDIR

elif [ "$1" == "--publish" ]; then
  npm publish
else
  printf "\nHello friend!\nPlease pass one of the following flags:\n\n--pack   npm pack - preview package before publishing, .tgz is added to working directory\n--publish   npm publish - publish the package\n\n\n"
fi

