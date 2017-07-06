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
				src:'img/art_images/africa.jpg', 
				width: 2336,
				height: 3264,
				aspectRatio: 2336/3264,
				lightboxImage: {
					src: 'img/art_images/africa.jpg',
					caption: 'Brush Sketch 1 (2017)'
				}
			},
			{ 
				src:'img/art_images/crouched.jpg', 
				width: 1886,
				height: 3040,
				aspectRatio: 1886/3040,
				lightboxImage: {
					src: 'img/art_images/crouched.jpg',
					caption: 'Brush Sketch 2 (2017)'
				}
			},
			{ 
				src:'img/art_images/hanbok.jpg', 
				width: 2084,
				height: 3199,
				aspectRatio: 2084/3199,
				lightboxImage: {
					src:'img/art_images/hanbok.jpg',
					caption: 'Brush Sketch 3 (2017)'
				}
			},
			{ 
				src:'img/art_images/head.jpg', 
				width: 2437,
				height: 2682,
				aspectRatio: 2437/2682,
				lightboxImage: {
					src: 'img/art_images/head.jpg',
					caption: 'Brush Sketch 4 (2017)'
				}
			},
			{ 
				src:'img/art_images/forest_rock.jpg', 
				width: 730,
				height: 1095,
				aspectRatio: 730/1095,
				lightboxImage: {
					src: 'img/art_images/forest_rock.jpg',
					caption: 'Rock: forest (2013, Acrylic on Canvas)'
				}
			},
			{
				src:'img/art_images/sea_rock.jpg',
				width: 1024,
				height: 683,
				aspectRatio: 1024/683,
				lightboxImage: {
					src:'img/art_images/sea_rock.jpg',
					caption: 'Rock: sea (2013, Acrylic on Canvas)'
				}
			},
			{
				src:'img/art_images/sonnet_of_the_shapes.jpg',
				width: 1024,
				height: 683,
				aspectRatio: 1024/683,
				lightboxImage: {
					src:'img/art_images/sonnet_of_the_shapes.jpg',
					caption: 'Sonnet of the Shapes (2013, Acrylic on Canvas)'
				}
			},
			{
				src:'img/art_images/sol.jpg',
				width: 468,
				height: 480,
				aspectRatio: 468/480,
				lightboxImage: {
					src: 'img/art_images/sol.jpg',
					caption: 'Sol (2014, Digital Art)'
				}
			},
			{
				src: 'img/art_images/decaying.jpg',
				width: 1024,
				height: 683,
				aspectRatio: 1024/683,
				lightboxImage: {
					src: 'img/art_images/decaying.jpg',
					caption: 'Decay (2013, Acrylic on Canvas) '
				}
			}, 
			{
				src: 'img/art_images/kubera.jpg',
				width: 960,
				height: 951,
				aspectRatio: 960/951,
				lightboxImage: {
					src: 'img/art_images/kubera.jpg',
					caption: 'Kubera (2012, Digital Art)'
				}
			},
			{
				src: 'img/art_images/red_haired_girl.jpg',
				width: 1024,
				height: 760,
				aspectRatio: 1024/760,
				lightboxImage: {
					src: 'img/art_images/red_haired_girl.jpg',
					caption: 'Red-haired Girl (2014, Digital Art)'
				}
			},
			{
				src: 'img/art_images/cascade.jpg',
				width: 1280,
				height: 853,
				aspectRatio: 1280/853,
				lightboxImage: {
					src: 'img/art_images/cascade.jpg',
					caption: "Cascade (2013, Acrylic on Canvas)"
				}
			},
			{
				src: 'img/art_images/baam.jpg',
				width: 900,
				height: 1400,
				aspectRatio: 900/1400,
				lightboxImage: {
					src: 'img/art_images/baam.jpg',
					caption: 'Baam (2013, Digital Art)'
				}
			}
		]
		return (
			<div>
        		<Gallery photos={PAINTINGS}  />
        	</div>
    	);
	}
}

class Designs extends React.Component {
	render() {
		const DESIGNS = 
		[
			{
				src:'img/design_images/namecard.jpg', 
				width: 283,
				height: 510,
				aspectRatio: 283/510,
				lightboxImage: {
					src: 'img/design_images/namecard.jpg',
					caption: 'Namecard Design (2017)'
				}
			},
			{ 
				src:'img/design_images/2016TalismanAudition.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2016TalismanAudition.jpg',
					caption: '2016 Talisman Audition Poster'
				}
			},
			{ 
				src:'img/design_images/contemporary_art_2.jpg', 
				width: 3508,
				height: 4961,
				aspectRatio: 3508/4961,
				lightboxImage: {
					src: 'img/design_images/contemporary_art_2.jpg',
					caption: 'Korean Contemporary Art Forum: 2nd Colloquium'
				}
			},
			{ 
				src:'img/design_images/2016TalismanSpring.jpg', 
				width: 3300,
				height: 5100,
				aspectRatio: 3300/5100,
				lightboxImage: {
					src: 'img/design_images/2016TalismanSpring.jpg',
					caption: '2016 Talisman Spring Show Poster'
				}
			},
			{ 
				src:'img/design_images/contemporary_art_1.jpg', 
				width: 3508,
				height: 4961,
				aspectRatio: 3508/4961,
				lightboxImage: {
					src: 'img/design_images/contemporary_art_1.jpg',
					caption: 'Korean Contemporary Art Forum: 1st Colloquium'
				}
			},
			{ 
				src:'img/design_images/2016TalismanGala.jpg', 
				width: 5850,
				height: 8400,
				aspectRatio: 5850/8400,
				lightboxImage: {
					src: 'img/design_images/2016TalismanGala.jpg',
					caption: '2016 Talisman Gala Show Poster'
				}
			},
			{ 
				src:'img/design_images/2015TalismanWinter.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2015TalismanWinter.jpg',
					caption: '2015 Talisman Winter Show Poster'
				}
			},
			{ 
				src:'img/design_images/2015TalismanAudition.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2015TalismanAudition.jpg',
					caption: '2015 Talisman Audition Poster'
				}
			}, 
			{ 
				src:'img/design_images/2015TalismanSpring.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2015TalismanSpring.jpg',
					caption: '2015 Talisman Spring Show Poster'
				}
			},
			{ 
				src:'img/design_images/2015TalismanGalaB.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2015TalismanGalaB.jpg',
					caption: '2015 Talisman Gala Show Poster (B)'
				}
			},
			{ 
				src:'img/design_images/2015TalismanGalaA.jpg', 
				width: 2550,
				height: 3300,
				aspectRatio: 2550/3300,
				lightboxImage: {
					src: 'img/design_images/2015TalismanGalaA.jpg',
					caption: '2015 Talisman Gala Show Poster (A)'
				}
			},
			{
				src: 'img/design_images/2for1_homepage.jpg',
				width: 622,
				height: 365,
				aspectRatio: 622/365,
				lightboxImage: {
					src: 'img/design_images/2for1_homepage.jpg',
					caption: 'Website for student group 2 for 1 (2014)'
				}
			},
			{
				src: 'img/design_images/card.jpg',
				width: 2598,
				height: 1685,
				aspectRatio: 2598/1685,
				lightboxImage: {
					src: 'img/design_images/card.jpg',
					caption: 'Card for Parents\' Day (2014)'
				}
			}
		]
		return (
			<div>
        		<Gallery photos={DESIGNS}  />
        	</div>
    	);
	}
}


export default class Art extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/art_banner.jpg",
				label: "Art",
				content: <Paintings />
			},
			{
				backgroundImage: "img/ui/design_banner.jpg",
				label: "Design",
				content: <Designs />
			}
		]
		return (
			<div>
				<Menu banners = {banners} colNum = {2}/>
			</div>
		);
	}
}