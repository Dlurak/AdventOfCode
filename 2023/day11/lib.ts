import { filterOut, isInRange, loadData, transpose } from '@helper';

const input = await loadData();

const matrix = input
	.split('\n')
	.slice(0, -1)
	.map((it) => it.split(''));

const rowsWithoutHash = filterOut(
	matrix.map((it, i) => (it.some((x) => x === '#') ? -1 : i)),
	-1,
);

const colsWithoutHash = filterOut(
	transpose(matrix).map((it, i) => (it.some((x) => x === '#') ? -1 : i)),
	-1,
);

const coordinates: { row: number; col: number }[] = [];
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] === '#')
			coordinates.push({
				row: i,
				col: j,
			});
	}
}

export const measureDistance = (expFactor: number) => {
	let distance = 0;
	for (let i = 0; i < coordinates.length; i++) {
		const currentCoord = coordinates[i];
		for (let j = i + 1; j < coordinates.length; j++) {
			const destinationCoord = coordinates[j];

			const rowsExpansion =
				rowsWithoutHash.filter((it) =>
					isInRange(
						Math.min(destinationCoord.row, currentCoord.row),
						it,
						Math.max(destinationCoord.row, currentCoord.row),
					),
				).length * expFactor;

			const colsExpansion =
				colsWithoutHash.filter((it) =>
					isInRange(
						Math.min(destinationCoord.col, currentCoord.col),
						it,
						Math.max(destinationCoord.col, currentCoord.col),
					),
				).length * expFactor;

			const rowDifferenceRaw =
				Math.abs(destinationCoord.row - currentCoord.row) + rowsExpansion;
			const colDifferenceRaw =
				Math.abs(destinationCoord.col - currentCoord.col) + colsExpansion;

			distance += rowDifferenceRaw + colDifferenceRaw;
		}
	}
	return distance;
};
