export const generateItems = (sizes, fruits, colors) => {
	return sizes.flatMap((size) =>
		fruits.flatMap((fruit) =>
			colors.map((color) => ({
				name: `${size} ${color} ${fruit}`,
				color,
			})),
		),
	);
};
