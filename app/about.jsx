import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

export default class About extends React.Component {

  render () {
    return (
    	<div>
    		<p>
    			I'm a programmer, designer, audiophile, singer, artist, and a tea connoisseur. Born and raised in Seoul, South Korea, I've always enjoyed being a bit of everything. 
    		</p>
  			<p>I was a gamer since young, but my discovery of indie games brought me to realize the potential of a game as an interactive medium of expression and creativity. This led  to an interest in computer science,&nbsp;which I am pursuing as a major in Stanford right now. Currently my biggest interests lie in Virtual Reality, AI and Neural Computation. </p>
  			<p>I also happen to design and paint things. What started out from doodling in corners of textbooks ended up as passion in visual art. I believe visual art empowers and contextualizes what is otherwise just a banal piece of material. I try to make my designs nonconforming but inspired by diverse artistic movements at the same time. I also paint digitally and acrylic is my preferred non-digital paint.</p>  
      </div>
    );
  }
}

