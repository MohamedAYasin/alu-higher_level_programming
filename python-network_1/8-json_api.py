#!/usr/bin/python3
"""Search API"""
import requests
import sys

if __name__ == '__main__':
    try:
        params = sys.argv[1]
    except IndexError:
        params = ""
    response = requests.post(
        "http://0.0.0.0:5000/search_user",
        data={"q": params}
    )
    try:
        json_response = response.json()
        if response.headers.get("Content-Type") == 'application/json':
            if len(json_response) > 0:
                print("[{}] {}".format(
                    json_response["id"],
                    json_response["name"])
                )
            else:
                print("No result")
    except:
        print("Not a valid JSON")
