import React, {Component} from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import CardSpecific from "./pages/CardSpecific"


class App extends Component {
	render() {
		return (
			<HashRouter>
				<Navigation/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/About" component={About}/>
					<Route path="/Contact" component={Contact}/>
					<Route path="/cardspecific/:id" component={CardSpecific}/>
					<Route component={Error}/>
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
