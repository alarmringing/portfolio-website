import React from 'react';
import {render} from 'react-dom';
import Banner from './banner.jsx';

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
	render() {
		var menuStyle = {
			width: "100%",
			height: "100%",
			position: "absolute",
			overflow: "scroll"
		};
		var colNum = 2;
		var rows = [];
		for (var i = 0; i < Math.floor((this.props.banners.length+1)/colNum); i++) {
			//for each column
			var indexL = parseInt(i)*2;
			console.log('indexL is ' + indexL + " and 3/2 is " + 3/2);
			var bannerL = this.props.banners[indexL];
			var bannerR = {backgroundImage: '', label: '', content: {}};
			if((indexL+1) < this.props.banners.length) {
				bannerR = this.props.banners[indexL+1];
				rows.push(
				<tr> 
					<td><Banner backgroundImage = {bannerL.backgroundImage} label = {bannerL.label} /></td>
					<td><Banner backgroundImage = {bannerR.backgroundImage} label = {bannerR.label} /></td>
				</tr>);
			}
			else {
				rows.push(
				<tr> 
					<td><Banner backgroundImage = {bannerL.backgroundImage} label = {bannerL.label} /></td>
				</tr>);
			}
			
			//var banner = this.props.banners[i];
			//banners.push(<Banner backgroundImage = {banner.backgroundImage} label = {banner.label} />);
		}
		return (
			<div style = {menuStyle} >
				<div id="filler" style = {{height: 100}} />
				<table> 
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
}