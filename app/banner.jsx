import React from 'react';
import {render} from 'react-dom';

export default class Banner extends React.Component {
	render() {
		var bgurl = "url(" + this.props.backgroundImage + ") center center / cover no-repeat"
		var bannerStyle = {
			width: 330,
			height: 330,
			background: bgurl,
			display: 'table',
			textAlign: 'center',
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
			<div style = {bannerStyle}>
				<span style = {labelStyle}>
					{this.props.label}
				</span>
			</div>
		);
	}
}