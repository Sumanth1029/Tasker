import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar";
import Title from "./title";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container1">
          <Title />
          <Tasksbar />
          <div className="push_right">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </div>
        </div>
      </Fragment>
    );
  }
}
