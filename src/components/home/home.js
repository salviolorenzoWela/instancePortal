import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './home.scss';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="home"></div>
        )
    }
}