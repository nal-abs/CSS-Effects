import React from 'react';
import CssMask from './css/Mask.js';

const component = {
	title: 'CSS/Mask',
	component: CssMask,
};

export default component;

const Template = (args) =>
	<CssMask { ...args }/>;

export const Mask = Template.bind({});

Mask.args = { };
