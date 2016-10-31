import React from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import {render} from 'react-dom';
import About from './about.jsx';
import { RouteTransition } from 'react-router-transition';


class App extends React.Component {
  render () {
    return (
    	<section>
    		<Template />
    		<RouteTransition
    			style = { {position: "absolute"} }
			    pathname={this.props.location.pathname}
			    atEnter={{ opacity: 0 }}
			    atLeave={{ opacity: 0 }}
			    atActive={{ opacity: 1 }}
			  >
    			<Content contentComponent = {this.props.children}/>
    		</RouteTransition>
    	</section>
    );
  }
}

class Content extends React.Component {
	render() {
		var contentStyle = {
			position: "fixed",
			height: "100%",
			top: 150,
			paddingRight: "7%",
			left: "27%"
		};
		return (
			<div style = {contentStyle}> 
				{this.props.contentComponent}
			</div>
		);
		
	}
}

class Template extends React.Component {
	render() {
		return (
			<section>
				<TitleBar />
				<Menu />
			</section>
		);
	}
}

class TitleBar extends React.Component {
	render() {
		var titleStyle = { 
			position: 'fixed',
			width: "100%",
			fontSize: 50
		};
		return (
			<div style = {titleStyle}> 
				<Link to={'/'}> Jihee Hwang </Link>
			</div>
		);
	}
}

class Menu extends React.Component {
	render() {
		var menuStyle = {
			width: "28%",
			fontSize: 21, 
			position: 'fixed',
			bottom: "7%",
			textAlign: "left"
		};
		var rowStyle = {
			paddingTop: 21
		};
		var menuItemKeys = ["About", "Coding", "Art", "Contact Me"];
		var menuItemRouteID = ['about', 'coding', 'art', 'contact'];
		var menuItems = [];
		for(var i=0; i<menuItemKeys.length; i++) {
			menuItems.push(<MenuItem key = {i} routeID = {menuItemRouteID[i]} menuText = {menuItemKeys[i]} menuStyle = {rowStyle}/>);
		}
		return (
			<div style = {menuStyle}>
				<table>
					<tbody>
						{menuItems}
					</tbody>
				</table>
			</div>
		);
	}
}

class MenuItem extends React.Component {
	render() {
		return (
			<tr>
				<td style = {this.props.menuStyle}>
					<Link to={this.props.routeID}> {this.props.menuText} </Link>
				</td>
			</tr>
		);	
	}
}

/*
render (
(
	<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
 ), document.getElementById('app'));*/

render( 
	<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>, document.getElementById('app'));