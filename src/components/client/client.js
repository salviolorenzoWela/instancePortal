import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default ({ match }) => {
	const settings = () => {
		fetch('/url');
		return 'settings';
	};

	settings();

	return (
		<div className='client'>
			<div>{match.params.name}</div>
		</div>
	);
};
