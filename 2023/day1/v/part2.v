import os
import regex

fn main() {
	input_raw := os.read_file('input.txt') or {
		eprintln("Can't read the input file")
		return
	}

	input := replace_word_with_number(input_raw)

	// from here like part 1
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

fn replace_word_with_number(str string) string {
	word_numbers := {
		'one':   1
		'two':   2
		'three': 3
		'four':  4
		'five':  5
		'six':   6
		'seven': 7
		'eight': 8
		'nine':  9
	}

	mut replaced_string := str

	for key, value in word_numbers {
		mut re := regex.regex_opt(key) or { panic(err) }
		replaced_string = re.replace(replaced_string, '${key}${value}${key}')
	}

	return replaced_string
}
