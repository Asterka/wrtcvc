import React, { Component } from 'react'
const pkg = require("../../package.json")
import { DefaultEffects } from '@fluentui/react';
import VideoChatCard from "./VideoChatCard"
import styled from "styled-components"

export interface myNewDiv extends React.HtmlHTMLAttributes<HTMLDivElement>{
}

const MyDiv = styled.div`
margin:auto;
width: 90%;
display: flex;
flex-direction:row;
flex-wrap:wrap; 
justify-content:center;
transition: flex 0.4s ease;
@media (max-width: 768px) {
}
`
export const Div: React.FC<myNewDiv> = ({children, ...rest}) =>(
    <MyDiv {...rest}>{children}</MyDiv>
)


export default class CallComponent extends Component {
    render() {
        return (
        <>
            <Div style={{boxShadow: DefaultEffects.elevation64}}>
                <VideoChatCard />
                <VideoChatCard />
                <VideoChatCard />
                <VideoChatCard />
            </Div>
        </>        
        )
    }
}