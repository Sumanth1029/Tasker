import React, { Component, Fragment } from "react";
import Taskcard from "./card";
import { connect } from "react-redux";

class Tasksbar extends Component {
  render() {
    const tasks = this.props;
    // console.log(tasks.existingTasks);
    return (
      <Fragment>
        <div className="container2">
          <div className="row container3 text-center">
            {/* {tasks.existingTasks &&
              tasks.existingTasks.map((ele) => (
                <Taskcard key={ele.id} data={ele} />
              ))} */}

              {tasks.existingTasks.length>0 ? tasks.existingTasks.map((ele) => (
                <Taskcard key={ele.id} data={ele} />
              )):<div className="text-center" style={{color:"white"}}>No existing tasks. Press add to create new</div>}
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
