import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';

class FMRI extends React.Component {
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
						[ <b> Haptic FMRI </b> ]
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

class LSTM extends React.Component {
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
						[ <b> Motion Generation Using 3-Layer-LSTM </b> ]
					</p>
				</div>
				<div>
				  <p>
				  	<img src="img/research_images/LSTM_fig.jpg" style={{width:500}} />
				  </p>
				  <p style= {{textAlign: 'center' }}> 
				  	<p><b>CS 231N (Convolutional Neural Networks) / 231A (Computer Vision) Joint Project</b></p>
				  	<p><b>Jihee Hwang and Danish Shabbir (Spring 2017)</b></p> 
				  </p>
				  <div style = {{textAlign: 'left'}}>
					  <p>By feeding motion data from joint-annotated videos (JHMDB data set) into a 3-Layer-LSTM (Long-Term Short Memory) Recurrent Neural Network structure, we were able to accurately generate human motion of a certain action given 5 to 10 initial frames of an unseen motion. <br />
					   Tensorflow was used for modeling the neural network, and Python was the primary language. </p>
					  <p>Read the poster below for more detailed information.</p>
				  </div>
				  <div class='zoom' style={{textAlign: 'center'}}>
					  <p>
					  	<img src="img/research_images/LSTM_poster.jpg" style= {{width:700}} />
					  </p>
				  </div>
				</div>
			</section>
		);
	}
}

class ChildLang extends React.Component {
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
						[ <b> Modeling Infant Statistical Learning in Lexical Acquisition 
through Machine Learning </b> ]
					</p>
				</div>
				<div>
				  <p>
				  	<img src="img/research_images/childlang_wave.jpg" style={{width:500}} />
				  </p>
				  <p style= {{textAlign: 'center' }}> 
				  	<p><b>CS 221 (Artificial Intelligence) Final Project</b></p>
				  	<p><b>Jihee Hwang, Eric Ehizokhale and Krishan Kumar (Fall 2016)</b></p> 
				  </p>
				  <div style = {{textAlign: 'left'}}>
					  <p> The statistical learning model for infant language acquisition theorizes that children obtain lexical, grammatical and even phonological knowledge about a certain language by extracting statistical regularities from any input stream of words. <br />
					   For this project, we replicated such lexical statistical learning given a set of speech audio inputs by incorporating techniques such as MFCC analysis, K-means clustering, and Uniform Cost Search. <br /> 
					   Python was primarily used for the project. </p>
					  <p> Look below for the final report. </p>
				  </div>
				  <div>
				  <embed src="files/childlang_report.pdf" width="700" height = "800" type='application/pdf' />
   				  </div>
				</div>
			</section>
		);
	}
}

export default class Research extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/research/FMRI.jpg",
				label: "Haptic FMRI",
				content: <FMRI />
			},
			{
				backgroundImage: "img/ui/research/LSTM.jpg",
				label: "LSTM Motion Generation",
				content: <LSTM />
			},
			{
				backgroundImage: "img/ui/research/childlang.jpg",
				label: "Language Acquisition Modeling",
				content: <ChildLang />
			}
		]
		return (
			<Menu banners = {banners} colNum = {2}/>
		);

	}
}