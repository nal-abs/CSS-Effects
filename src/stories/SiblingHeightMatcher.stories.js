import React from 'react';
import CssSiblingHeight from '../components/SiblingHeightMatcher.js';

const component = {
	title: 'CSS/SiblingHeight',
	component: CssSiblingHeight,
};

export default component;

const Template = (args) =>
	<CssSiblingHeight { ...args }/>;

export const SiblingHeight = Template.bind({});

SiblingHeight.args = { };
