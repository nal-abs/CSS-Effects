/* eslint-disable no-magic-numbers */
import React from 'react';
import { Box } from '@mui/material';

const FishEye = () =>
	<Box
		className="fish-parent"
	>
		{[1, 2, 3, 4].map((ele) =>
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
	</Box>;

export default FishEye;
