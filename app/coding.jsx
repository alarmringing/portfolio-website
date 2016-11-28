import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';
import Gamedev from './gamedev.jsx';

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
				  	<b>Stanford Robotics Lab (Spring 2015 - Spring 2016)</b> 
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

class Blockchain extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<img src = "img/blockchain_images/screenshot.png" width = "800" />
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b>Decentralized Exchange (temp) - React/Redux, 2016 </b>
				</p>
				<div style = {{textAlign: 'left'}}>
					<p>
					This is a decentralized exchange protocol developed with Solidity on the blockchain and React+Redux on the client side, created as an individual project under the Korean cryptocurrency exchange <a style = {{textDecoration: 'underline'}} href = "https://www.korbit.co.kr/">Korbit</a>. 
					</p>
					<p> 
						The advent of the blockchain technology has enabled a whole new level of secure decentralization across several applications, some of which includes currencies (Bitcoin), file storage(Storj) and identity keeping (Namecoin). Such decentralization, combined with the near-infinite possibilities of Turing-complete Ethereum contracts, can provide a very viable solution to security and risk management issues that exist in a majority of current centralized cryptocurrency exchanges. 
					</p>
					<p> It is a protocol comprised of multiple smart contracts living on the blockchain where each of them acts as an independent cryptocurrency market. As those smart contracts are completely transparent and immutable by nature, such market design allows users of the exchange to trade without any trust in the counterparty or a central organization. Furthermore, because anyone can freely deploy a new market contract to be included in the exchange, this protocol seeks further decentralization and flexibility in comparison to other smart contract-based exchanges. 
					</p>
					<p>
						The project is undergoing development after the end of my internship, so the exact location of the test server cannot be disclosed. 
					</p>
				</div>
			</div>
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
				label: "Blockchain\nDevelopment",
				content: <Blockchain />
			},
			{
				backgroundImage: "img/ui/gamedev_banner.jpg",
				label: "Game\nDevelopment",
				content: <Gamedev /> 
			},
			{
				backgroundImage: "img/ui/academics_banner.jpg",
				label: "Academic\nProjects"
			}
		]
		return (
			<Menu banners = {banners} colNum = {2}/>
		);

	}
}