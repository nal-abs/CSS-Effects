import { range } from '@laufire/utils/collection';
import React from 'react';
import { Box } from '@mui/material';

const bookCount = 5;
const inclination = 20;

const BookEffect = () =>
	<Box className="book-parent">{range(1, bookCount).map((dummy, index) =>
		<Box key={ index } className="parent">
			<Box
				sx={ { 'transform': `rotate(${ (dummy + 1) * inclination }deg) scale(0.5, 0.5)`,
					'&:hover': { transform: 'rotate(0deg) scale(1,1)' }} }
				className="book"
			>Hello!
				<Box
					className="welcome fancy"
					sx={ { color: 'black' } }
				>welcome</Box></Box></Box>)}</Box>;

export default BookEffect;
