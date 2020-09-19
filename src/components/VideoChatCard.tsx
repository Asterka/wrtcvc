import React, { Component } from 'react'
const pkg = require("../../package.json")//getMainData
import { DefaultEffects } from '@fluentui/react';

export default class VideoChatCard extends Component {
    render() {
        return (
        <>
            <div style={{ boxShadow: DefaultEffects.elevation8, width: "25%", minWidth:"330px", margin:"10px"}}>
                <img src={`http://89.223.91.151:3002/static/wrtcvc/${pkg.version}/static/me.jpg`}/>
            <button>Join the Room</button>
            </div>
        </>        
        )
    }
}