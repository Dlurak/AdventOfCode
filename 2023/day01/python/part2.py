import re
from typing import List

with open('./input.txt', 'r') as f:
    content = f.read()


def extract_digits(input_string: str) -> List[int]:
    digits = re.findall(r'\d', input_string)
    return [int(digit) for digit in digits]


def first_and_last(list):
    return list[0], list[-1]


def replace_numbers(input_string: str) -> str:
    replaced = input_string

    numbers = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    }

    for key, value in numbers.items():
        replaced = replaced.replace(key, f'{key}{value}{key}')

    return replaced


lines = replace_numbers(content).splitlines()
digits = list(map(lambda line: first_and_last(extract_digits(line)), lines))
numbers = list(map(lambda digit: digit[0] * 10 + digit[1], digits))

print(sum(numbers))
