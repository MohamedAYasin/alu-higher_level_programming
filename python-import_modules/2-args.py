#!/usr/bin/python3
from sys import argv
if __name__ == '__main__':
    args_number = len(argv) - 1

    if args_number > 0:
        if args_number == 1:
            print("{} argument:".format(args_number))
        else:
            print("{} arguments:".format(args_number))
        i = 1
        for args in argv[1:]:
            print("{}: {}".format(i, args))
            i += 1
    else:
        print("{} arguments.".format(args_number))
