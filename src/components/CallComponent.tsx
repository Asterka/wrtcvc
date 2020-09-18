import React, { Component } from 'react'
import {Button} from "uikit-asterka"
import styled from 'styled-components'

const StyledImg = styled.div`
width: 200px;
height: 200px;
background: url(/api/getImage?id=1);
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
            <Image background="https://img.favpng.com/11/9/5/iphone-telephone-call-smartphone-clip-art-png-favpng-vrkRSBrbW2c5PHBuwLY2FytkN.jpg" width="200px" height="100px"/>
            <Button title="Test">Call</Button>
        </>        
        )
    }
}
