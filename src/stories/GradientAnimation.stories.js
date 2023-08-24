import React from 'react';
import CssAnimation from '../components/GradientAnimation.js';

const component = {
	title: 'CSS/Animation',
	component: CssAnimation,
};

export default component;

const Template = (args) =>
	<CssAnimation { ...args }/>;

export const Animation = Template.bind({});

Animation.args = { };
