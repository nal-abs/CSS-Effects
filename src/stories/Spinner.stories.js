import React from 'react';
import CssSpinner from './css/Spinner.js';

const component = {
	title: 'CSS/Spinner',
	component: CssSpinner,
};

export default component;

const Template = (args) =>
	<CssSpinner { ...args }/>;

export const Spinner = Template.bind({});

Spinner.args = { };
