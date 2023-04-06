#!/usr/bin/python3
"""Python script that fetches https://alu-intranet.hbtn.io/status"""
import requests

if __name__ == '__main__':
    response = requests.get("https://intranet.hbtn.io/status")
    print("Body response:")
    print("\t- type: {}".format(type(response.text)))
    print("\t- content: {}".format(response.text))
