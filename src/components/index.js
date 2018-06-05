import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Promise } from 'es6-promise';
import fetch from 'isomorphic-fetch';

class App extends Component {
    componentDidMount = () => {
        fetch('url-xxx')
        .then(res => res.json());
    }

    render = () => {
        return (
        <div>Hello World</div>
        )
    }
}

export default hot(module)(App)