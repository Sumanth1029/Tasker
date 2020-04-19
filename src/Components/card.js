import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { deleteTasks } from "../actions/delete";

class Taskcard extends Component {
  handleDelete = (taskTitle) => {
    this.props.deleteTask(taskTitle);
  };

  render() {
    return (
      <Fragment>
        <div className="card ">
          <div className="card-title"></div>
          {this.props.data.taskTitle}
          <div className="card-body">
            {" "}
            {this.props.data.taskDesc &&
              this.props.data.taskDesc.map((item) => (
                <ol key={item}>{item}</ol>
              ))}
          </div>

          <div className="card-footer">
            <div
              className="btn btn-primary"
              aria-label="delete"
              onClick={() => {
                this.handleDelete(this.props.data.taskTitle);
              }}

              // onClick={(e) => this.setState({ visible: true })}
            >
              Delete
            </div>
            {/* </IconButton> */}
          </div>
          {/* <Button label="Show" icon="pi pi-info-circle" onClick={(e) => this.setState({visible: true})} /> */}
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (taskTitle) => {
      dispatch(deleteTasks(taskTitle));
    },
  };
};
export default connect(null, mapDispatchToProps)(Taskcard);
