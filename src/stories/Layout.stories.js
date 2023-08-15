import React from 'react';
import CssLayout from './css/Layout/index';
import getRandomColor from './css/Layout/helper/getRandomColor';

const component = {
	title: 'CSS/Layout',
	component: CssLayout,
	argTypes: {
		layout: {
			control: 'radio',
			options: [
				'singleColumn',
				'twoColumn',
				'threeColumn',
			],
		},
	},
	args: {
		layout: 'twoColumn',
	},
};

export default component;

const Template = ({ children, layout }) =>
	<CssLayout config={ layout }>
		{children.map((child) => child)}
	</CssLayout>;

export const Layout = Template.bind({});

Layout.args = {
	children: [
		<div
			key={ 1 }
			style={ { background: getRandomColor() } }
		>
			Hi all welcome to react-web-components</div>,
		<div
			key={ 2 }
			style={ { background: getRandomColor(), height: '100%' } }
		>B</div>,
		<div
			key={ 3 }
			style={ { background: getRandomColor(),
				height: '100%' } }
		>C</div>,
	],
};
