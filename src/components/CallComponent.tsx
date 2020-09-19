import React, { Component } from 'react'
import {Button} from "uikit-asterka"
import styled from 'styled-components'
const pkg = require("../../package.json")
import { DefaultEffects } from '@fluentui/react';
import CardField from "./CardField"
export default class CallComponent extends Component {
    render() {
        return (
        <>
            <CardField />
        </>        
        )
    }
}
