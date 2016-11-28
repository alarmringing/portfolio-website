import React,{ Component } from 'react';
import {Animation, AnimationGroup, Animatable, ParallaxStarfield} from 'react-web-animation';

class Particles extends Component {
    constructor() {
        super();
        this.state = {
            width: 0,
            height: 0
        }
    }
    getParticles ( count ) {
        var particleStyle = {
            backgroundColor: '#fc2e25',
            height: '3px',
            width: '3px',
            opacity: 1,
            position: 'absolute'
        }
        var animations = [];
        for(var i = 0; i < count; i++) {
            animations.push(
                <Animatable key={i}
                                keyframes={[{transform: 'translate3d(0, 0, 0)'}, {transform: `translate3d(300px, 0, 0)`}]}
                                timing={{duration: Math.pow(2, 20), iterations: 1}}>
                    <div style = {particleStyle} />
                </Animatable>
            );
        }
        return (
            <AnimationGroup style={{position: 'absolute', width: '100%', height: '100%'}}>
                {animations}
            </AnimationGroup>
        );
    }
    render() {
        return(
            <div style = {{height: "100%", width: "100%"}}>
                {this.getParticles(10)}
            </div>
        );
    }
}

class Face extends Component {
    constructor() {
        super();
        this.state = {
            keyframes: [
                { transform: 'translate3d(0, 0, 0)', offset: 0 },
                { transform: 'translate3d(0, 1, 0)', offset: 0.5 },
                { transform: 'translate3d(0, 0, 0)', offset: 1 },
            ],
            timing: {
                duration: 1000,
                iterations: 100
            }
        }
    }
    render() {
        var faceStyle = {
            width: "46vw"
        };
        return (
            <img src = "img/ui/face.jpg" className = "floating" style = {faceStyle}/>
        );
    }
}

export default class MainScreen extends React.Component {
    render() {


        return(
            <div>
                <Face />
            </div> 
        );
    }
}