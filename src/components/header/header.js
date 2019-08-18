import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from './images/logo.png';

export default () => {
	return (
		<header>
			<img src={logo} alt='Benjamin Logo' />
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							exact
							activeStyle={{ borderBottom: '1px solid black' }}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/instances'
							activeStyle={{ borderBottom: '1px solid black' }}
						>
							Instance Manager
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
