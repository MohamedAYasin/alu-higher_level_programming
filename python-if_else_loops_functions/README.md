#  Python - if/else, loops, functions

In this project, I was able to learn about various concepts such as: 
* The importance of indentation in Python
* How to use the `if`, `if ... else` statements
* How to use comments
* How to add values to variables
* How to use the `while` and `for` loops
* How to use the `break` and `continues` statements
* How to use `range` etc.

The project presented a challenge due to the numerous concepts that needed to be covered. However, the experience was also intriguing as I discovered several fascinating concepts in Python.

## Function Prototypes :file_folder:

Prototypes for functions written in this project:

| File                       | Prototype                                               |
| -------------------------- | ------------------------------------------------------- |
| `7-islower.py`             | `def islower(c):`                                       |
| `8-uppercase.py`           | `def uppercase(str):`                                   |
| `9-print_last_digit.py`    | `def print_last_digit(number):`                         |
| `10-add.py`                | `def add(a, b):`                                        |
| `11-pow.py`                | `def pow(a, b):`                                        |
| `12-fizzbuzz.py`           | `def fizzbuzz():`                                       |
| `101-remove_char_at.py`    | `def remove_char_at(str, n):`                           |
| `102-magic_calculation.py` | `def magic_calculation(a, b, c):`                       |

## Tasks :page_with_curl:

**Task-0**: The [0-positive_or_negative.py](./0-positive_or_negative.py) file contains an update to the [source code](https://github.com/holbertonschool/0x01.py/blob/master/0-positive_or_negative_py) that prints whether the number stored in the variable `number` is positive or negative.

**Task-1**: The [1-last_digit.py](./1-last_digit.py) file contains an update to the [source code](https://github.com/holbertonschool/0x01.py/blob/master/1-last_digit_py) that prints the last digit of the number stored in the variable `number`

**Task-2**: The [2-print_alphabet.py](./2-print_alphabet.py) file contains a program that prints the ASCII alphabet, in lowercase, not followed by a new line.

**Task-3**: The [3-print_alphabt.py](./3-print_alphabt.py) contains a program that prints the ASCII alphabet, in lowercase, not followed by a new line with the exception of `q` and `e`

**Task-4**: The [4-print_hexa.py](./4-print_hexa.py) contain a program that prints all numbers from 0 to 98 in decimal and in hexadecimal (as in the following example)
```sh
	guillaume@ubuntu:~/$ ./4-print_hexa.py
	0 = 0x0
	1 = 0x1
	2 = 0x2
	3 = 0x3
	4 = 0x4
	5 = 0x5
	6 = 0x6
	7 = 0x7
	8 = 0x8
	9 = 0x9
	10 = 0xa
	11 = 0xb
	12 = 0xc
	13 = 0xd
	14 = 0xe
	15 = 0xf
	16 = 0x10
	17 = 0x11
	18 = 0x12
	...
	96 = 0x60
	97 = 0x61
	98 = 0x62
	guillaume@ubuntu:~/$
```

**Task-5**: The [5-print_comb2.py](./5-print_comb2.py) file contains a program that prints numbers from `0` to `99`.

**Task-6**: The [6-print_comb3.py](./6-print_comb3.py) file contains a program that prints all possible different combinations of two digits with `01` and `10` being considered the same combination of the two digits `0` and `1`. The output should be:
```sh
	guillaume@ubuntu:~/$ ./6-print_comb3.py
	01, 02, 03, 04, 05, 06, 07, 08, 09, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 45, 46, 47, 48, 49, 56, 57, 58, 59, 67, 68, 69, 78, 79, 89
	guillaume@ubuntu:~/$ 
```

**Task-7**: The [7-islower.py](./7-islower.py) file contains a function that checks for lowercase character.

**Task-8**: The [7-islower.py](./7-islower.py) file contains a function that checks for lowercase character.

**Task-9**: The [8-uppercase.py](./8-uppercase.py) file contains a function that prints a string in uppercase followed by a new line.

**Task-10**: The [9-print_last_digit.py](./9-print_last_digit.py) file contains a function that prints the last digit of a number.

**Task-11**: The [10-add.py](./10-add.py) file contains a function that adds two integers and returns the result.

**Task-12**: The [11-pow.py](./11-pow.py) file contains a function that computes `a` to the power of `b` and return the value.

**Task-13**: The [12-fizzbuzz.py](./12-fizzbuzz.py) file contains a function that prints the numbers from 1 to 100 separated by a space.
  * For multiples of three print `Fizz` instead of the number and for multiples of five print `Buzz`.
  * For numbers which are multiples of both three and five print `FizzBuzz`.

**Task-14**: The [100-print_tebahpla.py](./100-print_tebahpla.py) file contains a program that prints the ASCII alphabet, in reverse order, alternating lowercase and uppercase (`z` in lowercase and `Y` in uppercase) , not followed by a new line.

**Task-15**: The [101-remove_char_at.py](./101-remove_char_at.py) file contains a function that creates a copy of the string, removing the character at the position `n` (not the Python way, the “C array index”).

**Task-16**: The [102-magic_calculation.py](./102-magic_calculation.py) file contains Python function `def magic_calculation(a, b, c):` that does exactly the same as the following Python bytecode:
```sh
	  3           0 LOAD_FAST                0 (a)
		      3 LOAD_FAST                1 (b)
		      6 COMPARE_OP               0 (<)
		      9 POP_JUMP_IF_FALSE       16

	  4          12 LOAD_FAST                2 (c)
		     15 RETURN_VALUE

	  5     >>   16 LOAD_FAST                2 (c)
		     19 LOAD_FAST                1 (b)
		     22 COMPARE_OP               4 (>)
		     25 POP_JUMP_IF_FALSE       36

	  6          28 LOAD_FAST                0 (a)
		     31 LOAD_FAST                1 (b)
		     34 BINARY_ADD
		     35 RETURN_VALUE

	  7     >>   36 LOAD_FAST                0 (a)
		     39 LOAD_FAST                1 (b)
		     42 BINARY_MULTIPLY
		     43 LOAD_FAST                2 (c)
		     46 BINARY_SUBTRACT
		     47 RETURN_VALUE
```
