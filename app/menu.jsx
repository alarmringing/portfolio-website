import React from 'react';
import {render} from 'react-dom';
import Banner from './banner.jsx';
import {Animation, AnimationGroup, Animatable} from 'react-web-animation';

//this.props.contents
/*
	banners = [
		{
			backgroundImage: '',
			label: '',
			content: {}
		}
	]
*/

export default class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			thisContent: [],
			contentVisible: false,
			keyframes: [
	            { opacity: '1', offset: 0 },
            	{ opacity: '0', offset: 1 }
	        ],
			timing: { duration: 200, iterations: 1 }
		};		
		this.bannerSelected = this.bannerSelected.bind(this);
		this.goBack = this.goBack.bind(this);
	}
	bannerSelected(e) {
		this.setState({
			thisContent: [this.props.banners[e.currentTarget.id].content],
			contentVisible: true
		});
	}
	goBack() {
		this.setState({ contentVisible: false });
	}
	
	render() {
		var containerStyle = {
			width: "100%",
			height: "100%",
			position: "absolute",
			overflow: "scroll",
			paddingBottom: 300
		};
		var contentStyle = {
			width: "80%"
		};
		var menuStyle = {};
		var backArrowStyle = {
			textAlign: 'right',
			fontSize: "170%"
		};

		if(this.state.contentVisible) {
			menuStyle.display = 'none';
			contentStyle.display = 'block';
			backArrowStyle.display = 'block';
		}else {
			backArrowStyle.display = 'none';
			menuStyle.display = 'block';
			contentStyle.display = 'none';
		}

		var rows = [];
		for (var i = 0; i < Math.floor((this.props.banners.length+1)/this.props.colNum); i++) {
			//for each column
			var cols = [];
			for(var j = 0; j< this.props.colNum; j++) {
				var index = parseInt(i)*2 + parseInt(j);
				if(index < this.props.banners.length) {
					var thisBanner = this.props.banners[index];
					cols.push(
						<td id = {index} onClick = {this.bannerSelected}>
							<Banner backgroundImage = {thisBanner.backgroundImage} 
								isDimmed = {false} label = {thisBanner.label} />
						</td>
					);
				}
				
			}
			rows.push(
				<tr>
					{cols}
				</tr>
			);
		}
		return (
			<section>
				<a id = "backbutton" style = {backArrowStyle} onClick = {this.goBack} > ⬅ Back </a>
				<div style = {containerStyle} >
					<div style = {menuStyle} >
						<table id = "selectMenu"> 
							<tbody>
								{rows}
							</tbody>
						</table>
					</div>
					<div style = {contentStyle} id = "content">
						{this.state.thisContent[0]}
					</div>
					<div style = {{height: 200}} />
				</div>
			</section>
		);
	}
}