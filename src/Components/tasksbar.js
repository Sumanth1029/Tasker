import React, { Component, Fragment } from "react";
import Taskcard from "./card";
import axios from "axios";
import {connect} from 'react-redux'

class Tasksbar extends Component {
//   state = { exisitingTasks: [] };

  

//   componentDidMount() {
//     // console.log("hi")

//     axios.get("http://localhost:2000/getAll").then((tasks) => {
//       this.setState({ exisitingTasks: tasks.data });
//       console.log(this.state);
//     });
//   }
  render() {
    //   console.log(this.props)
      const tasks=this.props
      console.log( tasks.existingTasks)
    return (
      <Fragment>
        <div className="container1">
          <div className="row">
            {tasks.existingTasks &&
              tasks.existingTasks.map((ele) => (
                // <div>{console.log(ele._id)}</div>
                <Taskcard key={ele._id} data={ele} />
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}


const mapStateToProps=(state)=>{
    return{
        existingTasks:state.existingTasks
    }
}

export default connect(mapStateToProps)(Tasksbar)