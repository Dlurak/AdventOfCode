import os
import regex

fn main() {
	input := os.read_file('input.txt') or {
		eprintln("Can't read the input file")
		return
	}
	lines := input.split_into_lines()
	mut sum := 0

	mut re := regex.regex_opt(r'\d') or { panic(err) }

	for _, line in lines {
		numbers := re.find_all_str(line)
		first_digit := numbers[0].int()
		last_digit := numbers.reverse()[0].int()

		sum += first_digit * 10 + last_digit
	}

	println(sum)
}
