import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Instances from './components/instances/instances';
import Client from './components/client/client';

function App() {
	return (
		<>
			<Router>
				<div className='App'>
					<Header />
					<Route path='/' exact component={Home} />
					<Route path='/instances' component={Instances} />
					<Route path='/client/:name' component={Client} />
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
