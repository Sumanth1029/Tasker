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
         
            <div className="btn btn-success float btn-circle btn-xl">
            <i className="fa fa-3x fa-plus my-float"></i></div>
          </div>
      </Fragment>
    );
  }
}
