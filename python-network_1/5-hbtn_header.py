#!/usr/bin/python3
"""Python URL Script"""
import requests
import sys

if __name__ == '__main__':
    url = sys.argv[1]
    response = requests.get(url)
    print("{}".format(response.headers.get("X-Request-Id")))
