import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';

export default class Coding extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/research_banner.jpg",
				label: "Research"
			},
			{
				backgroundImage: "img/ui/blockchain_banner.jpg",
				label: "Blockchain Development"
			},
			{
				backgroundImage: "img/ui/gamedev_banner.jpg",
				label: "Game Development"
			}
		]
		return (
			<Menu banners = {banners}/>
		);

	}
}