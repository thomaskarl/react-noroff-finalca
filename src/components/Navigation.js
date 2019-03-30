import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<div className='container-fluid'>
				<div className='col-sm-12'>
					<ul className='main-menu'>
						<li><i className='fa fa-gamepad'></i> Card Game</li>
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/about' activeClassName={'active'}>About</NavLink></li>
						<li><NavLink to='/contact' activeClassName={'active'}>Contact</NavLink></li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navigation;
