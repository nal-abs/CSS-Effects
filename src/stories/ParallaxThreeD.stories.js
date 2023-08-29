import React from 'react';
import CssParallaxThreeD from '../components/ParallaxThreeD.js';

const component = {
	title: 'CSS/ParallaxThreeD',
	component: CssParallaxThreeD,
};

export default component;

const Template = (args) =>
	<CssParallaxThreeD { ...args }/>;

export const ParallaxThreeD = Template.bind({});

ParallaxThreeD.args = { };
