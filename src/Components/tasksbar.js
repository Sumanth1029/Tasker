import React, { Component, Fragment } from "react";
import Taskcard from "./card";
import { connect } from "react-redux";

class Tasksbar extends Component {
  render() {
    const tasks = this.props;
    console.log(tasks.existingTasks);
    return (
      <Fragment>
        <div className="container2">
          <div className="row container3">
            {tasks.existingTasks &&
              tasks.existingTasks.map((ele) => (
                <Taskcard key={ele._id} data={ele} />
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    existingTasks: state.existingTasks,
  };
};

export default connect(mapStateToProps)(Tasksbar);
