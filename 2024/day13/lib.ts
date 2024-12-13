type Machine = Record<'a' | 'b' | 'prize', number[]>;

export const buttonPresses = ({ a, b, prize }: Machine) => {
	const [xa, ya] = a;
	const [xb, yb] = b;
	const [xp, yp] = prize;

	const d = xa * yb - xb * ya;
	const d1 = xp * yb - xb * yp;
	const d2 = xa * yp - xp * ya;

	if (d === 0 || d1 % d !== 0 || d2 % d !== 0) {
		return;
	}

	return { a: d1 / d, b: d2 / d };
};
