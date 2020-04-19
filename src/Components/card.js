import React, { Component, Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteTasks } from "../actions/delete";

class Taskcard extends Component {
  handleDelete = (taskTitle) => {
    console.log("sdfs",taskTitle);
    this.props.deleteTask(taskTitle);
  };
  Example = (title) => {
    const [show, setShow] = useState(false);
    // console.log("title:", title);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => {
      this.handleDelete(title.title);
      setShow(false);
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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
            <button
              className="btn btn-primary"
              aria-label="delete"
              onClick={() => {
                this.handleDelete(this.props.data.taskTitle);
              }}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
        <this.Example title={this.props.data.taskTitle}></this.Example>
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
