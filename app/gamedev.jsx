import React from 'react';
import {render} from 'react-dom';
import Menu from './menu.jsx';

class DontMissIt extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<iframe width="560" height="315" src="http://gamejolt.com/games/don-t-miss-it/123128#close" frameborder="0" allowfullscreen / >				
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b>Dont Miss It (PC/Mac/Web, 2016) - Jihee Hwang, Alex Peake, Fletcher Cole, Colin Wright </b>
				</p>
				<p style= {{textAlign: 'center', fontSize: 14}}>Click <a style = {{textDecoration: 'underline'}} href = "http://gamejolt.com/games/don-t-miss-it/123128#close">here</a> to play the game full screen.</p>
				<p style = {{textAlign: 'left'}}> 
					An Oculus-compatible experience, Don't Miss It explores the balance of real life and online social life. The player is given 2 different goals: heading to a real-life appointment, and maintaining online social relations with a smartphone. Developed with Unity and C# during Global Game Jam 2016.
				</p>
			</div>
		);
	}
}

class Shockatron extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/323cfps-Yvg" frameborder="0" allowfullscreen />
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b>Shockatron! (PC/Mac, 2016) - Jihee Hwang, Heather Halls </b>
				</p>
				<p style = {{textAlign: 'left'}}> 
					Shockatron! is currently a development in progress that stemmed from the idea of turning a music visualizer to a game. The goal is to allow the player to explore and interact with the environment to create a more musically immersive experience. 
					The scene as of now involves a planet occupied with buildings that procedurally move along to the music. 
					The prime objective of the game is to destroy all the corrupted buildings while maintaining energy and health. 
				</p>
			</div>
		);
	}
}

class FractalTrip extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<img src="img/gamedev_images/fractal_trip.jpg" width = "500" />
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b> Fractal Trip (PC/Mac, 2016) - Jihee Hwang, Alec Arshavsky, Yvan Quinn </b>
				</p>
				<p style = {{textAlign: 'left'}}> 
					Fractal Trip is an Oculus Rift and Myo-compatible immsersive music visualizer that involves procedural fractal generation from a given audio file. Using hand gesture and movement input from the Myo, the player is also able to directly manipulate and interact with the audio. Developed with Unity and C#.
				</p>
			</div>
		);
	}
}

class LetThereBeLight extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/lh52bu4cUv8" frameborder="0" allowfullscreen  />
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b> Let There Be Light (PC/Mac, 2015) </b>
				</p>
				<p style = {{textAlign: 'left'}}> 
					A 3D interactive simulation/game involving various AI agents seeking to expand territory under certain rules, and player as “god” must increase number of followers by exerting control over the rules governing the world. Developed with Unreal Engine and C++.
				</p>
			</div>
		);
	}
}

class EcoDot extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<iframe width="420" height="315" src="https://www.youtube.com/embed/VZEF4JBKdK8" frameborder="0" allowfullscreen /> 
				</div>
				<p style= {{font: 'bold', textAlign: 'center'}} >
					<b> EcoDot (Android, 2013) </b>
				</p>
				<p style = {{textAlign: 'left'}}> 
					A simulation of utility-based AI agents, which react to inputs (resources given) by the user using the touch-screen interface. Created with Processing then ported to android. Above video depicts the original  version. Currently on Google Play Store. 
				</p>
			</div>
		);
	}
}

export default class Gamedev extends React.Component {
	render() {
		var banners = [
			{
				backgroundImage: "img/ui/gamedev/shockatron.jpg",
				label: "Shockatron!",
				content: <Shockatron />
			},
			{
				backgroundImage: "img/ui/gamedev/dont_miss_it.jpg",
				label: "Don't Miss It",
				content: <DontMissIt />
			},
			{
				backgroundImage: "img/ui/gamedev/fractal_trip.jpg",
				label: "Fractal Trip",
				content: <FractalTrip />
			},
			{
				backgroundImage: "img/ui/gamedev/ltbl.jpg",
				label: "Let there \nbe light",
				content: <LetThereBeLight />
			},
			{
				backgroundImage: "img/ui/gamedev/ecodot.jpg",
				label: "Ecodot",
				content: <EcoDot />
			}
		]
		return (
			<Menu banners = {banners} colNum = {2}/>
		);

	}
}