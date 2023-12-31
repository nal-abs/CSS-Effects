import React from 'react';
import CssSpinner from '../components/Spinner.js';

const component = {
	title: 'CSS/Spinner',
	component: CssSpinner,
};

export default component;

const Template = (args) =>
	<CssSpinner { ...args }/>;

export const Spinner = Template.bind({});

Spinner.args = { };
