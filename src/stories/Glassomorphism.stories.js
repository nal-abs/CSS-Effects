import React from 'react';
import CssGlassomorphism from './css/Glassomorphism.js';

const component = {
	title: 'CSS/Glassomorphism',
	component: CssGlassomorphism,
	argTypes: {
		styles: {
			control: 'check',
			options: [
				'none',
				'grayscale',
				'brightness',
				'blur',
				'contrast',
				'drop-shadow',
				'invert',
				'opacity',
				'sepia',
				'saturate',
				'hue-rotate',
			],
		},
	},
	args: {
		styles: ['drop-shadow'],
	},
};

export default component;

const Template = (args) =>
	<CssGlassomorphism { ...args }/>;

export const Glassomorphism = Template.bind({});

Glassomorphism.args = {

};
