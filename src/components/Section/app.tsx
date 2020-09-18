import React, { Component } from 'react'
import {Button} from "uikit-asterka"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthComponent from '../AuthComponent';
import CallComponent from '../CallComponent';


export default class App extends Component {
    render() {
        return (
        <>
        <h1>Hello</h1>
        <Router>
            <Route path="/wrtcvc/auth" component={AuthComponent}/>
            <Route path="/wrtcvc/call" component={CallComponent}/>
        </Router>
        </>        
        )
    }
}
