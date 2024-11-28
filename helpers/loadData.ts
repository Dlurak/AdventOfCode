export const loadData = async () => {
	const file = Bun.file(Bun.argv[2]);
	return await file.text();
};
