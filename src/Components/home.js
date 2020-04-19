import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar";
import Title from "./title";
// import { Sidebar } from "primereact/sidebar";

export default class Home extends Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <Fragment>
        <div className="container1">
          <Title />
          <Tasksbar />
          <div className="push_right">
            <div className="btn btn-success" onClick={(e)=>{this.setState({visible:true})}}>Add</div>
            {console.log(this.state.visible)}
          </div>
          
          
        </div>
      </Fragment>
    );
  }
}
