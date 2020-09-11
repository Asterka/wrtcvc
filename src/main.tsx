import React from "react"
import ReactDOM from "react-dom"
import App from "./app"

export default () => <App />;

export const mount = (Component)=>{
    ReactDOM.render(<Component/>, 
        document.getElementById("app")
        )
}

export const unmount = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById("app"))
}
