import React from 'react';
import CssFishEye from '../components/FishEyeEffect.js';

const component = {
	title: 'CSS/FishEye',
	component: CssFishEye,
};

export default component;

const Template = (args) =>
	<CssFishEye { ...args }/>;

export const FishEye = Template.bind({});

FishEye.args = { };
