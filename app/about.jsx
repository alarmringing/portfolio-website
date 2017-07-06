import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

export default class About extends React.Component {

  render () {
    var buttonStyle = {
      padding: 10
    }
    return (
    	<div>
        <div id="filler" style = {{height: 100}} />
        <div style = {{textAlign: 'left'}}>
    		  <p>
    			 I'm a programmer, designer, audiophile, singer, and a tea connoisseur. Born and raised in Seoul, South Korea, I've always enjoyed being a bit of everything. 
    		  </p>
  			 <p>I was a gamer since young, but my discovery of indie games brought me to realize the potential of a game as an interactive medium of expression and creativity. This led to an interest in computer science,&nbsp;which I am pursuing as a major in Stanford right now. Also dabbling in Linguistics and Japanese as my minors, some of my biggest interests lie in Virtual Reality, AI, NLP and Computer Vision. </p>
  			 <p>It also happens that I'm slightly <i>artsy</i>. It shows through sometimes.</p>  
        </div>
        <div id = "buttons" style = {{textAlign: 'left'}}>
          <a style = {buttonStyle} href="https://github.com/alarmringing"> 
            <img width = '28' height = '28' src = "img/ui/github-icon.png"/>
          </a>
          <a style = {buttonStyle} href="https://www.linkedin.com/in/jihee-hwang-58261a84"> 
            <img width = '30' height = '30' src = "img/ui/linkedin-icon.png"/>
          </a>
          <a style = {buttonStyle} href="files/resume.pdf" download="jihee_hwang_resume"> 
            <img width = '31' height = '31' src = "img/ui/resume-icon.png"/>
          </a>
        </div>
      </div>
    );
  }
}

