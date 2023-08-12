import React from 'react';
import CssLayout from './css/Layout/index';

const children = ['Hi welcome to react web components', 'B', 'C', 'D', 'E'];

const component = {
	title: 'CSS/Layout',
	component: CssLayout,
};

export default component;

const Template = () =>
	<CssLayout>{children.map((child, i) =>
		<div
			key={ i }
		>{child}</div>)}</CssLayout>;

export const Layout = Template.bind({});

Layout.args = {
};
