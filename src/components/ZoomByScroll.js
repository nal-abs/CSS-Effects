/* eslint-disable no-magic-numbers */
import * as React from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';
import { range } from '@laufire/utils/collection';

const AnimatedLayers = ({ scrollYProgress, textStyles }) =>
	<div className="animated__layers">
		<animated.div
			className="dot"
			style={ {
				clipPath: scrollYProgress.to((val) => `inset(${ 50 - (val * 40) }% 10%)`),
			} }
		>
			<h1 className="title">
				<span>
					<animated.span style={ (textStyles) }>
						Aha!</animated.span>
				</span>
				<span>
					<animated.span style={ textStyles }>
						You found me!</animated.span>
				</span>
			</h1>
		</animated.div>
	</div>;

const ZoomByScroll = () => {
	const containerRef = React.useRef(null);
	const [textStyles, textApi] = useSpring(() => ({
		y: '100%',
	}));

	const { scrollYProgress } = useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress: scroll }}) =>
			(scroll > 0.7
				? textApi.start({ y: '0' })
				: textApi.start({ y: '100%' })),
		default: {	immediate: true },
	});

	return (
		<div ref={ containerRef } className="ZoomByScroll">
			<AnimatedLayers { ...{ scrollYProgress, textStyles } }/>
			{range(0, 4).map((ele, index) =>
				<div key={ index } className="page"/>)}</div>
	);
};

export default ZoomByScroll;
