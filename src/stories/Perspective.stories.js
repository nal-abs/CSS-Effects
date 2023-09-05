import React from 'react';
import CssPerspective from '../components/Perspective.js';

const component = {
	title: 'CSS/Perspective',
	component: CssPerspective,
};

export default component;

const Template = (args) =>
	<CssPerspective { ...args }/>;

export const Perspective = Template.bind({});

Perspective.args = { };
