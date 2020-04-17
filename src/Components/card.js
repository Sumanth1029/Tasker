import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Card extends Component {
  render() {
    return <Fragment>

        <div className="card" key={this.props.data._id}>
            <div className="card-title text-center">
                {this.props.data.taskTitle}
            </div>

            <div className="card-body">
                {this.props.data.taskDesc.map((item)=>(
                    <ol key={item}>
                        {item}
                    </ol>
                ))}
            </div>
        </div>

    </Fragment>;
  }
}
