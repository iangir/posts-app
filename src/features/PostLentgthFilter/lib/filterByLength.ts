export const filterByLength = <T extends Record<string, any>>(
	arr: T[],
	order: 'asc' | 'desc' | null,
	key: keyof T
) => {
	if (!order) return arr;
	const sortedArr = [...arr].sort((a, b) => {
		const length = a[key].length - b[key].length;
		return order === 'asc' ? length : -length;
	});

	return sortedArr;
};
