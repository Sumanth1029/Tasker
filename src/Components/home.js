import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar";
import Title from "./title";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {connect} from 'react-redux'
import {addTaskAction} from "../actions/add"
import {new_tasks} from "../classes/taskobj"
 class Home extends Component {
  addTask=(taskObj)=>{
    this.props.addTasks(taskObj)
  }
  render() {
    return (
      <Fragment>
        <div className="container1">
          <Title />
          <Tasksbar />
          <div className="float">
          <Fab color="primary" aria-label="add" onClick={()=>{this.addTask(new_tasks)}}>
            <AddIcon />
          </Fab>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTasks: (taskObj) => {
      dispatch(addTaskAction(taskObj));
    },
  };
};
export default connect(null, mapDispatchToProps)(Home);
