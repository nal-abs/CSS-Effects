/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import * as React from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';
import { peek } from '@laufire/utils/debug';

const ZoomByScroll = () => {
	const containerRef = React.useRef(null);

	const [textStyles, textApi] = useSpring(() => ({
		y: '100%',
	}));

	const { scrollYProgress } = useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress: scroll }}) =>
			(scroll > 0.7
				? textApi.start({ y: '0%' })
				: textApi.start({ y: '100%' })),
		default: {
			immediate: true,
		},
	});

	return (
		<div ref={ containerRef } className="body">
			<div className="animated__layers">
				<animated.div
					className="dot"
					style={ {
						clipPath: scrollYProgress.to((val) => `circle(${ val * 100 }%)`),
					} }
				>
					<h1 className="title">
						<span>
							<animated.span style={ peek(textStyles) }>
								Aha!</animated.span>
						</span>
						<span>
							<animated.span style={ textStyles }>
								You found me!</animated.span>
						</span>
					</h1>
				</animated.div>
			</div>
			{Array(3).fill(null)
				.map((ele, index) =>
					<div key={ index } className="full__page"/>)}
		</div>
	);
};

export default ZoomByScroll;
