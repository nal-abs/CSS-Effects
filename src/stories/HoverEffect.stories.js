import React from 'react';
import CssHoverEffect from './css/HoverEffect';

const component = {
	title: 'CSS/HoverEffect',
	component: CssHoverEffect,
};

export default component;

const Template = (args) =>
	<CssHoverEffect { ...args }/>;

export const HoverEffect = Template.bind({});

HoverEffect.args = { };
