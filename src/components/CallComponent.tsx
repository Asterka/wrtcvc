import React, { Component } from 'react'
import {Button} from "uikit-asterka"
import styled from 'styled-components'

const StyledImg = styled.div`
width: 200px;
height: 200px;
background: url(http://89.223.91.151:3002/static/wrtcvc/1.1.2/static/me.jpg);
`

interface ImageProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    background: string;
    width: string;
    height: string;
}

const Image: React.FC<ImageProps> = ({children}) =>(
<StyledImg >{children}</StyledImg>
)

export default class CallComponent extends Component {
    render() {
        return (
        <>
            <h1>Call</h1>
            <Button title="Test">Call</Button>
        </>        
        )
    }
}
