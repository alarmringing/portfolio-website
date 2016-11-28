import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';


class Research extends React.Component {
	render() {
		var titleStyle = {
			font: 'bold',
			fontSize: 24,
			textAlign: 'center',
			paddingBottom: 20
		}
		return (
			<section>
				<div>
					<p style = {titleStyle}>
						[ <b> Research </b> ]
					</p>
				</div>
				<div>
				  <p>
				  	<img src="img/research_images/HFI_demo.jpg" style={{width:500}} />
				  </p>
				  <p style= {{textAlign: 'center' }}> 
				  	<b>Stanford Artificial Intelligence Lab (Spring 2015 - Spring 2016)</b> 
				  </p>
				  <div style = {{textAlign: 'left'}}>
					  <p>The photo above depicts an Haptic FMRI Interface (HFI) setup, in which the subject inside the fMRI is prompted to control a  3-Degree of Freedom haptic device along a visually guided trajectory.<br />
					    As a research assistant, I designed and led a HFI - compatible motion experiment, "Spatial Move". Spatial Move seeks to help identify how the brain represents motor control and coordination for individual subjects.<br />
					    The experiment was developed using C++, MATLAB and Python, the Haptic Chai library and the Standard Control Library (SCL).</p>
					  <p>Read the poster below for more detailed information.</p>
				  </div>
				  <div class='zoom' style={{textAlign: 'center'}}>
					  <p>
					  	<img src="img/research_images/SURI_Poster2015.jpg" style= {{width:700}} />
					  </p>
				  </div>
				</div>
			</section>
		);
	}
}

export default class Coding extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/research_banner.jpg",
				label: "Research",
				content: <Research />
			},
			{
				backgroundImage: "img/ui/blockchain_banner.jpg",
				label: "Blockchain Development"
			},
			{
				backgroundImage: "img/ui/gamedev_banner.jpg",
				label: "Game Development"
			},
			{
				backgroundImage: "img/ui/academics_banner.jpg",
				label: "Academic Projects"
			}
		]
		return (
			<Menu banners = {banners} colNum = {2}/>
		);

	}
}