#!/usr/bin/python3
"""Python script that takes in a URL and displays the body of the response."""
import requests
import sys

if __name__ == '__main__':
    url = sys.argv[1]
    response = requests.get(url)
    if response.status_code >= 400:
        print("Error code: {}".format(response.status_code))
    else:
        print("{}".format(response.text))
