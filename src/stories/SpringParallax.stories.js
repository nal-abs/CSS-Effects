import React from 'react';
import CssSpringParallax from '../components/SpringParallax.js';

const component = {
	title: 'CSS/SpringParallax',
	component: CssSpringParallax,
};

export default component;

const Template = (args) =>
	<CssSpringParallax { ...args }/>;

export const SpringParallax = Template.bind({});

SpringParallax.args = { };
