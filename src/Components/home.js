import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar"
import Title from "./title"



export default class Home extends Component {
 

  render() {
    return (
      <Fragment>
          <Title/>
          <Tasksbar/>
        
      </Fragment>
    );
  }
}
