import React from 'react';
import { Box } from '@mui/material';

const numbers = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];

const FishEyeEffect = () => <Box className="items">{numbers.map((number) =>
	<Box key={ number } className="item">
		{number}</Box>)}</Box>;

const FishEye = () =>
	<Box>
		<Box
			className="fish-parent"
		>
			{['One', 'Two', 'Three', 'Four'].map((ele) =>
				<Box
					key={ ele }
					sx={ {
						'transition': 'all 10s ease',
						'&:hover': { width: '200px', filter: 'sepia(100%)' },
					} }
					className="fish-eye"
				>
					{ele}
				</Box>)}
		</Box><FishEyeEffect/></Box>;

export default FishEye;
