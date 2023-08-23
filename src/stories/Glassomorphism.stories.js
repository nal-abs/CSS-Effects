import React from 'react';
import CSSGlassomorphism from './css/Glassomorphism.js';

const component = {
	title: 'CSS/Glassomorphism',
	component: CSSGlassomorphism,
	argTypes: {
		filters: {
			control: 'check',
			options: [
				'none',
				'grayscale',
				'brightness',
				'blur',
				'contrast',
				'invert',
				'opacity',
				'sepia',
				'saturate',
				'hueRotate',
			],
		},
		blur: {
			control: { type: 'range', min: 1, max: 20, step: 1 },
		},
		contrast: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
		},
		opacity: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
		},
		sepia: {
			control: { type: 'range', min: 0, max: 100, step: 10 },
		},
		saturate: {
			control: { type: 'range', min: 0, max: 100, step: 10 },
		},
		hue: {
			control: { type: 'range', min: 0, max: 360, step: 10 },
		},
		grayscale: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
		},
		brightness: {
			control: { type: 'range', min: 0, max: 2, step: 0.1 },
		},
		background: {
			control: 'radio',
			options: ['linearGradient', 'color', 'image'],
		},
		image: {
			type: 'string',
			if: { arg: 'background', eq: 'image' },
		},
		color: {
			type: 'string',
			if: { arg: 'background', eq: 'color' },
		},
		linearGradientOne: {
			control: {
				type: 'color',
			},
			if: { arg: 'background', eq: 'linearGradient' },
		},
		linearGradientTwo: {
			control: {
				type: 'color',
			},
			if: { arg: 'background', eq: 'linearGradient' },
		},
	},
	args: {
		filters: ['blur'],
		blur: 6,
		sepia: 0,
		opacity: 0,
		contrast: 0,
		brightness: 1.5,
		saturate: 100,
		hue: 170,
		grayscale: 1,
		background: 'image',
		image:
		'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/0236.jpg)',
		color: 'red',
		linearGradientOne: 'green',
		linearGradientTwo: 'yellow',
	},
};

export default component;

const Template = (args) => {
	const { linearGradientOne, linearGradientTwo, background } = args;
	const linearGradient = background === 'linearGradient'
		&& `linear-gradient(45deg, transparent 39%, ${ linearGradientOne } 61%),
				linear-gradient(125deg, ${ linearGradientTwo } 45%, transparent 55%)`;

	return <CSSGlassomorphism { ...{ ...args, linearGradient } }/>;
};

export const Glassomorphism = Template.bind({});
