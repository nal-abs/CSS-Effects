/* eslint-disable max-len */
import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const GlassLayer = () =>
	<div className="glass-effect">
		<ParallaxLayer offset={ 0.5 } speed={ 1.5 } style={ { zIndex: 2 } }>
			<p>ParagraphParagraphs are the group
				of sentences combined together, about a certain topic.
				It is a very important form of writing as we write almost everything
				in paragraphs, be it an answer, essay, story, emails, etc.
				We can say that a well-structured paragraph is the essence of good writing.
				The purposes of the paragraph are to give information, to explain
				something, to tell a story, and to convince someone that our idea is right.
				Paragraphs are blocks of textual content that segment out a larger
				piece of writing—stories, novels, articles, creative writing,
				or professional writing portions—making it less complicated.
			</p></ParallaxLayer>
	</div>;

export default GlassLayer;
