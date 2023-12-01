import { configDotenv } from 'dotenv';

export const loadData = async (options: {
	day: number;
	year: number;
	part: number;
}) => {
	const solveIndex = Bun.argv.indexOf('--solve');
	const debugIndex = Bun.argv.indexOf('--debug');
	if (solveIndex === -1 && debugIndex === -1) {
		console.log('The flags --solve and --debug are supported');
		process.exit(1);
	}

	const realSolveIndex = solveIndex === -1 ? Infinity : solveIndex;
	const realDebugIndex = debugIndex === -1 ? Infinity : debugIndex;

	const flag = realSolveIndex < realDebugIndex ? '--solve' : '--debug';

	if (flag === '--debug') {
		const file = Bun.file(`./input${options.part}.txt`);
		return await file.text();
	}

	configDotenv({
		path: '../../.env',
	});
	const cookie = process.env.COOKIE;
	if (!cookie) {
		console.log('A COOKIE must be set in the .env file');
		process.exit(1);
	}

	const data = await fetch(
		`https://adventofcode.com/${options.year}/day/${options.day}/input`,
		{
			headers: new Headers({
				Cookie: cookie,
			}),
		},
	).then((res) => res.text());

	return data;
};
