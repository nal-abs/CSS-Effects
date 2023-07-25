import React from 'react';
import CssMask from './css/Mask.js';

const component = {
	title: 'CSS/Mask',
	component: CssMask,
	argTypes: {
		image: { control: 'radio',
			options: ['airplane.png',
				'animate.svg',
				'animatedWolf.png',
				'semiTransparent.png',
				'linear-gradient'] },
	},
	args: {
		image: 'semiTransparent.png',
	},
};

export default component;

const Template = (args) =>
	<CssMask { ...args }/>;

export const Mask = Template.bind({});

Mask.args = { };
