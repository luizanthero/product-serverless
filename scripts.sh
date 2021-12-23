#!/bin/bash
set -e

case "$1" in
  test)
    echo 'Testing...'
    export DEBUG=gb:*
    export NODE_ENV=test
    jest --coverage --forceExit --passWithNoTests --detectOpenHandles
  ;;
  *)
    echo "Usage: {test}"
    exit 1
  ;;
esac