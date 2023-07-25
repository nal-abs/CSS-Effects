import React from 'react';
import CssMask from './css/Mask.js';

const component = {
	title: 'CSS/Mask',
	component: CssMask,
	argTypes: {
		URL: { control: 'radio', if: { arg: 'imageType', eq: 'url' },
			options: ['airplane.png',
				'animate.svg',
				'animatedWolf.png',
				'semiTransparent.png'] },
		LinearGradient: { control: 'radio',
			if: { arg: 'imageType', eq: 'linear-gradient' },
			options: ['linear-gradient'] },
		imageType: {
			type: 'select',	options: ['url', 'linear-gradient'],
		},
	},
	args: {
		imageType: 'url',
	},
};

export default component;

const Template = (args) =>
	<CssMask { ...args }/>;

export const Mask = Template.bind({});

Mask.args = { };
