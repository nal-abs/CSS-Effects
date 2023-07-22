import React from 'react';
import CssButton from './css/ButtonEffect.js';

const component = {
	title: 'CSS/Button',
	component: CssButton,
};

export default component;

const Template = (args) =>
	<CssButton { ...args }/>;

export const Button = Template.bind({});

Button.args = { };
