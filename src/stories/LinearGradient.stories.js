import React from 'react';
import CssLinearGradient from '../components/LinearGradient.js';

const component = {
	title: 'CSS/LinearGradient',
	component: CssLinearGradient,
};

export default component;

const Template = (args) =>
	<CssLinearGradient { ...args }/>;

export const LinearGradient = Template.bind({});

LinearGradient.args = { };
