#!/usr/bin/python3

for i in range(97, 122 + 1):
    if ((i == 113) or (i == 101)):
        continue
    print("{:c}".format(i), end='')
