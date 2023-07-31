import React from 'react';
import CssBookEffect from './css/BookTransition.js';

const component = {
	title: 'CSS/BookEffect',
	component: CssBookEffect,
};

export default component;

const Template = (args) =>
	<CssBookEffect { ...args }/>;

export const BookEffect = Template.bind({});

BookEffect.args = { };
