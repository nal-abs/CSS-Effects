const Length = 6;
const base = 16;

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for(let i = 0; i < Length; i++)
		color += letters[Math.floor(Math.random() * base)];

	return color;
};

export default getRandomColor;
