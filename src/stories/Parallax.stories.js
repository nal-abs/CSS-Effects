import React from 'react';
import CssParallax from '../components/Parallax';

const component = {
	title: 'CSS/Parallax',
	component: CssParallax,
};

export default component;

const Template = (args) =>
	<CssParallax { ...args }/>;

export const Parallax = Template.bind({});

Parallax.args = { };
