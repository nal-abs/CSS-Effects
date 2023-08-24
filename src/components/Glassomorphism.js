import clsx from 'clsx';
import React from 'react';

const backdropFilters = {
	none: () => 'none',
	grayscale: ({ grayscale }) => `grayscale(${ grayscale })`,
	brightness: ({ brightness }) => `brightness(${ brightness })`,
	blur: ({ blur }) => `blur(${ blur }px)`,
	contrast: ({ contrast }) => `contrast(${ contrast })`,
	invert: ({ invert }) => `invert(${ invert })`,
	opacity: ({ opacity }) => `opacity(${ opacity })`,
	sepia: ({ sepia }) => `sepia(${ sepia }%)`,
	saturate: ({ saturate }) => `saturate(${ saturate })`,
	hueRotate: ({ hue }) => `hue-rotate(${ hue }deg)`,
};

const getBackdrop = (args) => args.filters.map((filter) =>
	backdropFilters[filter](args));

const Glassomorphism = ({ background, ...args }) =>
	<div
		className="glassomorphism"
		style={ { background: args[background] } }
	>
		<div
			className="glass-effect"
			style={ { backdropFilter: clsx(getBackdrop(args)) } }
		/>
	</div>;

export default Glassomorphism;
