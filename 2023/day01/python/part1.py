import re
from typing import List

with open('./input.txt', 'r') as f:
    content = f.read()


def extract_digits(input_string: str) -> List[int]:
    digits = re.findall(r'\d', input_string)
    return [int(digit) for digit in digits]


def first_and_last(list):
    return list[0], list[-1]


lines = content.splitlines()
digits = list(map(lambda line: first_and_last(extract_digits(line)), lines))
numbers = list(map(lambda digit: digit[0] * 10 + digit[1], digits))

print(sum(numbers))
