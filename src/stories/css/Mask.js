import React from 'react';
import svgImage from '../../images/SvgImage.svg';
import pngImage from '../../images/fighterJet.png';
import wolfImage from '../../images/wolf.png';
import Butterfly from '../../images/Butterfly.png';

const url = {
	'airplane.png': pngImage,
	'animate.svg': svgImage,
	'animatedWolf.png': wolfImage,
	'semiTransparent.png': Butterfly,
};

const gradient = {
	'linear-gradient': 'to bottom, transparent 25%, black 75%',
};

const Mask = ({ URL, imageType, LinearGradient }) => {
	const type = URL || LinearGradient;
	const img = URL ? url : gradient;

	return <div className="mask" style={ { WebkitMaskImage: `${ imageType }(${ img[type] })` } }>
		<div className="backgroundMask"/>
	</div>;
};

export default Mask;
