import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className={'navigation-container'}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about" activeClassName={'active'}>About</NavLink>
			<NavLink to="/contact" activeClassName={'active'}>Contact</NavLink>
		</nav>
	);
};

export default Navigation;
