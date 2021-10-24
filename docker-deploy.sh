#!/bin/bash

while getopts "u:t:" opt:
do
  case "$opt" in
    u ) username="$OPTARG" ;;
    t ) token="$OPTARG" ;;
    * ) echo "Nope" ;;
  esac
done

docker login -u "$username" -p "$token"
docker-compose up --build -d

