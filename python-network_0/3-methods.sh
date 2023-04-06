#!/bin/bash
# are you well commented
curl -sI "$1" | grep "Allow: " | cut -d " " -f 2-
