import React,{ Component, Fragment } from "react";

export default class Title extends Component{
    render(){
        return(
            <Fragment ><div className="text-center">
                <h1 className="color0">Tasker</h1>
                <h6 className="color1">Create tasks by pressing plus</h6>
                <h6 className="color1">and delete them by pressing delete</h6></div>
            </Fragment>
        )
    }
}