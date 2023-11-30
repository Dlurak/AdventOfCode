export const range = (size: number, startAt: number = 0) =>
	[...Array(size).keys()].map((i) => i + startAt);
