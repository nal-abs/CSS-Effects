import React from 'react';
import CssSpotLight from '../components/SpotLight.js';

const component = {
	title: 'CSS/SpotLight',
	component: CssSpotLight,
};

export default component;

const Template = (args) =>
	<CssSpotLight { ...args }/>;

export const SpotLight = Template.bind({});

SpotLight.args = { };
