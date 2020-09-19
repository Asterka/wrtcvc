import React, { Component } from 'react'
import {Button} from "uikit-asterka"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthComponent from '../AuthComponent';
import CallComponent from '../CallComponent';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "main",
            rooms: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id){
        switch(id){
            case 1:
                this.setState({text: "auth"});
            break;
            case 2:
                this.setState({text: "call"});
            break;
        }
    }
    render() {
        return (
        <>
        <h1>Hello, you're now on a main page</h1>
        <Router>
            <div>
            <a href="/wrtcvc/auth" onClick={this.handleClick}>Proceed to authorization</a>
            </div>
            <div>
            <a href="/wrtcvc/call" onClick={this.handleClick}>Prceed to the Rooms</a>
            </div>
            <Route path="/wrtcvc/auth" component={AuthComponent}/>
            <Route path="/wrtcvc/call" component={CallComponent}/>
        </Router>
        </>        
        )
    }
}
