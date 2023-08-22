import clsx from 'clsx';
import React from 'react';

const backdropProperties = {
	grayscale: 'grayscale(1)',
	brightness: 'brightness(1.5)',
	blur: 'blur(5px)',
	contrast: 'contrast(0.8)',
	dropShadow: 'dropShadow(4px 4px 10px blue)',
	invert: 'invert(0.7)',
	opacity: 'opacity(60%)',
	sepia: 'sepia(90%)',
	saturate: 'saturate(1.8)',
	hueRotate: 'hueRotate(120deg)',
};

const getBackdrop = (styles) => styles.map((style) =>
	backdropProperties[style]);

const Glassmorphism = ({ styles }) => <div className="container">
	<div
		className="box"
		style={ { backdropFilter: clsx(getBackdrop(styles)) } }
	>
		<div>backdrop-filter: {styles}</div>
	</div>
</div>;

export default Glassmorphism;
