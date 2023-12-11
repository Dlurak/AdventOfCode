import { filterOut, loadData, transpose } from '@helper';

const input = await loadData({
	part: 1,
	day: 11,
	year: 2023,
});

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

for (const rowIndex of rowsWithoutHash.map((v, i) => v + i)) {
	matrix.splice(rowIndex, 0, new Array(matrix[0].length).fill('.'));
}

for (const colIndex of colsWithoutHash.map((v, i) => v + i)) {
	matrix.map((it) => it.splice(colIndex, 0, '.'));
}

// MATRIX EXPANDED

const coordinates: {
	row: number;
	col: number;
}[] = [];
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] === '#')
			coordinates.push({
				row: i,
				col: j,
			});
	}
}

// MEASURE DISTANCE
let distance = 0;
for (let i = 0; i < coordinates.length; i++) {
	const currentCoord = coordinates[i];
	for (let j = i + 1; j < coordinates.length; j++) {
		const destinationCoord = coordinates[j];

		const rowDifference = Math.abs(destinationCoord.row - currentCoord.row);
		const colDifference = Math.abs(destinationCoord.col - currentCoord.col);
		distance += rowDifference + colDifference;
	}
}

console.log(distance);
