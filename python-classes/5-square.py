#!/usr/bin/python3
"""
 A class Square that defines a square by: (based on 4-square.py)
"""


class Square:
    """Creates a square.
    Private instance attributes: size
    """

    def __init__(self, size=0):
        """Initialize data."""
        self.__size = size

    @property
    def size(self):
        """Retrieve size."""
        return self.__size

    @size.setter
    def size(self, value):
        """Sets size to a value."""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Returns square area."""
        return self.__size ** 2

    def my_print(self):
        """prints in stdout the square with the character #."""
        if self.__size == 0:
            print()
        else:
            for i in range(0, self.__size):
                for j in range(0, self.__size):
                    print("#", end="")
                print()
