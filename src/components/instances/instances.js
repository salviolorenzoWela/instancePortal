import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './instances.scss';

export default class Instances extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clients: [
				{
					name: 'GBMI',
					domain: 'gbmi.getwela.com',
					active: true,
					seats: 3,
					guid: 'ab10293nfg'
				},
				{
					name: 'Salmon Felte',
					domain: 'salmonfelte.getwela.com',
					active: true,
					seats: 3,
					guid: 'axirhj2048'
				},
				{
					name: 'Centorbi',
					domain: 'centorbi.getwela.com',
					active: false,
					seats: 3,
					guid: 'afk-34kfgfd45'
				}
			]
		};
	}

	render() {
		return (
			<div className='instances'>
				{this.state.clients.map((client, index) => {
					return (
						<NavLink to={`/client/${client.name}`}>
							<div className='client' key={index}>
								<h4>{client.name}</h4>
								<div className='clientInfo'>
									<div>Domain: {client.domain}</div>
									<div>Seats: {client.seats}</div>
									<div>{client.active ? 'Active' : 'Inactive'}</div>
								</div>
							</div>
						</NavLink>
					);
				})}
			</div>
		);
	}
}
