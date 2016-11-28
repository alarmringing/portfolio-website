import React from 'react';
import {render} from 'react-dom';
import {Animation, AnimationGroup, Animatable} from 'react-web-animation';


export default class Banner extends React.Component {

	constructor() {
		super();
		this.state = {
			playState: 'idle',
			keyframes: [
	            { transform: 'scale3d(1, 1, 1)', offset: 0 },
	            { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 },
	            { transform: 'scale3d(1, 1, 1)', offset: 1 },
	        ],
			timing: { duration: 200, iterations: 1 }
		};
		this.mouseOn = this.mouseOn.bind(this);

	}
    mouseOn() { this.setState({ playState: 'running'}); }

	render() {
		var bgurl = "url(" + this.props.backgroundImage + ") center center / cover no-repeat"
		var bgopacity = this.props.isDimmed ? 0.4 : 1.0;
		var bannerStyle = {
			width: 330,
			height: 330,
			background: bgurl,
			display: 'table',
			textAlign: 'center',
			opacity: bgopacity,
			margin: 40
			
		};
		var labelStyle = {
			color: '#fc2e25',
			display: 'table-cell',
  			verticalAlign: 'middle',
  			fontSize: 30,
  			fontWeight: 'bold'
		};

		return(
			<Animation keyframes={this.state.keyframes} timing={this.state.timing} 
				playState={this.state.playState} >
				<div style = {bannerStyle} 
					onMouseOver = { this.mouseOn } >
					<span style = {labelStyle}>
						{this.props.label}
					</span>
				</div>
            </Animation>
			
		);
	}
}