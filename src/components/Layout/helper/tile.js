import { range } from '@laufire/utils/collection';

const tile = (array, length) => {
	const repeat = Math.ceil(length / array.length);

	const duplicates = range(0, repeat)

		.reduce((acc) => acc.concat(array), []);

	return duplicates.slice(0, length);
};

export default tile;
