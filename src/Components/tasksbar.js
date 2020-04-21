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
            {/* {tasks.existingTasks &&
              tasks.existingTasks.map((ele) => (
                // <div>{console.log(ele._id)}</div>
                <Taskcard key={ele._id} data={ele} />
              ))} */}
              <div>
              {
                tasks.existingTasks?tasks.existingTasks.map((ele) => (
                  // <div>{console.log(ele._id)}</div>
                  <Taskcard key={ele._id} data={ele} />
                )):<h1>There are no tasks currently. Click on Plus to create one</h1>
              }</div>
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
