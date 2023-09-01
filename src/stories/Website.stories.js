import React from 'react';
import CssWebsite from '../components/Website.js';

const component = {
	title: 'CSS/Website',
	component: CssWebsite,
};

export default component;

const Template = (args) =>
	<CssWebsite { ...args }/>;

export const Website = Template.bind({});

Website.args = { };
