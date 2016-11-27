import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';
//import Hero from 'grommet/components/Hero';
import Gallery from 'react-photo-gallery';


class Paintings extends React.Component {
	render() {
		const PAINTINGS = 
		[
			{ 
				src:'img/art_images/forest_rock.jpg', 
				title: 'Rock: forest',
				description: '2013, Acrylic on Canvas'
			},
			{
				src:'img/art_images/sea_rock.jpg',
				title: "Rock: sea",
				description: '2013, Acrylic on Canvas'
			},
			{
				src:'img/art_images/sonnet_of_the_shapes.jpg',
				title: "Sonnet of the Shapes",
				description: '2013, Acrylic on Canvas'
			},
			{
				src:'img/art_images/sol.jpg',
				title: "Sol",
				description: '2014, Digital Art'
			},
			{
				src: 'img/art_images/decaying.jpg',
				title: "Decay",
				description: '2013, Digital Art'
			}, 
			{
				src: 'img/art_images/baam.jpg',
				title: "Baam", 
				description: '2013, Digital Art'
			},
			{
				src: 'img/art_images/cascade.jpg',
				title: "Cascade",
				description: '2013, Acrylic on Canvas'
			},
			{
				src: 'img/art_images/kubera.jpg',
				title: "Kubera",
				description: '2012, Digital Art'
			},
			{
				src: 'img/art_images/red_haired_girl.jpg',
				title: 'Red-haired Girl',
				description: '2014, Digital Art'
			},
			{
				src: 'img/art_images/the_reversal.jpg',
				title: 'The Reversal',
				description: '2014, Acrylic on Canvas'
			}
		]
		return (
        	<div/>//<Gallery photos={PAINTINGS}  />
    	);
	}
}


export default class Art extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/art_banner.jpg",
				label: "Art"
			},
			{
				backgroundImage: "img/ui/design_banner.jpg",
				label: "Design"
			}
		]
		return (
			<div>
				<Menu banners = {banners} />
				<Paintings />
			</div>
		);
	}
}