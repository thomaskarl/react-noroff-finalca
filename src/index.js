import ReactDOM from 'react-dom';
import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorComp from "./components/ErrorComp";
import CardSpecific from "./pages/CardSpecific";



class Start extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/" exact component={Login}/>
					<Route path="/Home" exact component={Home}/>
					<Route path="/About" component={About}/>
					<Route path="/Contact" component={Contact}/>
					<Route path="/card-specific/:id" component={CardSpecific}/>
					<Route component={ErrorComp}/>
				</Switch>
			</HashRouter>

		)
	}
}

ReactDOM.render(<Start />, document.getElementById('root'));

