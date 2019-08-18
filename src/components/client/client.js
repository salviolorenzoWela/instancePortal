import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './client.scss';

export default class Client extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true
		};
	}

	componentDidMount() {}

	settings() {
		fetch('/url');
		return 'settings';
	}

	render() {
		return (
			<div className='client'>
				<div className='headingBox'>
					<h2>{this.props.match.params.name}</h2>
					<div
						className={this.state.active ? 'active status' : 'inactive status'}
					>
						{this.state.active ? 'Active' : 'Inactive'}
					</div>
				</div>
				<div className='settingsBox'>
					<h3>Settings</h3>
					<ul>
						<h5>Client</h5>
						<li> Name: {this.props.match.params.name}</li>
						<li>Custodian: Fidelity</li>
						<li>Scheduling - Round Robin: Off</li>
						<li>Advisor Initials in Search Results: On</li>
						<li>2 Factor: On</li>
						<li>Timezone: EST</li>
						<h5>CRM</h5>
						<li>CRM: Wealthbox</li>
						<li>Last Meeting: Off</li>
						<li>Advisor 1: Off</li>

						<h5>Dashboard</h5>
						<li>Dashboard - Annual AUM Goal: $300,000,000</li>
						<li>Dashboard - Core Values: Off</li>
						<h5>Paperwork</h5>
						<li>
							Paperwork - Client Agreement:
							https://s3.amazonaws.com/benjamin-documents/agreements/ciaagreement.pdf
						</li>
					</ul>
				</div>
				<div className='settingsBox'>
					<h3>Integrations</h3>
				</div>
				<div className='settingsBox'>
					<h3>TBD</h3>
				</div>
				<div className='settingsBox'>
					<h3>Widget</h3>
				</div>
			</div>
		);
	}
}
