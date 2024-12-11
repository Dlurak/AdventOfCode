export const engraveStone = (stone: number) => {
	if (stone === 0) {
		return [1];
	}
	const stoneString = `${stone}`;
	if (stoneString.length % 2 === 0) {
		const middlePoint = stoneString.length / 2;
		return [
			parseInt(stoneString.slice(0, middlePoint)),
			parseInt(stoneString.slice(middlePoint)),
		];
	}

	return [stone * 2024];
};
