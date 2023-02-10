#!/usr/bin/python3
for letter in range(97, 123):
    """"Print all the alphabet letters except q and e, not followed by a new line
    """"
    if chr(letter) is not 'q' and chr(letter) is not 'e':
       print("{}".format(chr(letter)), end="")
