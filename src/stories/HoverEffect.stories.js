import React from 'react';
import CssHoverEffect from '../components/HoverEffect';

const component = {
	title: 'CSS/HoverEffect',
	component: CssHoverEffect,
};

export default component;

const Template = (args) =>
	<CssHoverEffect { ...args }/>;

export const HoverEffect = Template.bind({});

HoverEffect.args = { };
