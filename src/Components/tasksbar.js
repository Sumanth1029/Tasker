import React, { Component, Fragment } from "react";
import Card from "./card";
import axios from "axios";

export default class Tasksbar extends Component {
  state = { exisitingTasks: [] };

  componentDidMount() {
    // console.log("hi")

    axios.get("http://localhost:2000/getAll").then((tasks) => {
      this.setState({ exisitingTasks: tasks.data });
      console.log(this.state);
    });
  }
  render() {
    return (
      <Fragment>
        <div className="card-deck">
          {this.state.exisitingTasks &&
            this.state.exisitingTasks.map((ele) => (
              // <div>{console.log(ele._id)}</div>
              <Card key={ele._id} data={ele} />
            ))}
        </div>
      </Fragment>
    );
  }
}
