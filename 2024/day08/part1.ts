import {
	Coordinate,
	applyOffset,
	findCoordinates,
	lines,
	loadData,
	setValueAtCord,
	print,
	isInBounds,
	uniqueCoords,
	valueAtCoord,
} from '@helper';

const input = await loadData();
const matrix = lines(input, (line) => line.split(''));

const antennas = new Set(matrix.flat().filter((c) => c !== '.'));
const antennaCoords = [...antennas].reduce<Record<string, Coordinate[]>>(
	(acc, char) => ({
		...acc,
		[char]: findCoordinates(matrix, (c) => c === char),
	}),
	{},
);

const antinodes = Object.keys(antennaCoords).flatMap((key) => {
	const coords = antennaCoords[key];
	return coords.flatMap((coord, coordIndex) => {
		return coords
			.filter((_, index) => index !== coordIndex)
			.map((other) => {
				return applyOffset(coord, [
					(other.col - coord.col) * -1,
					(other.row - coord.row) * -1,
				]);
			});
	});
});

const allAntinodes = antinodes;
const antinodesInBounds = allAntinodes.filter((coord) => {
	return isInBounds(matrix, coord);
});
console.log(uniqueCoords(antinodesInBounds).length);

if (Bun.env.DATA === 'debug') {
	console.log(
		print(
			antinodes.reduce((acc, coord) => {
				const value = valueAtCoord(matrix, coord);
				return value === '.' ? setValueAtCord(acc, coord, '#') : acc;
			}, matrix),
		),
	);
}
