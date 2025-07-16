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

// export const filterByLength = (posts: Post[], filter: string) => {
// 	if (filter === 'max') {
// 		return [...posts].sort((post1, post2) => post1.title.length - post2.title.length);
// 	} else if (filter === 'min') {
// 		return [...posts].sort((post1, post2) => post2.title.length - post1.title.length);
// 	} else {
// 		return posts;
// 	}
// };
