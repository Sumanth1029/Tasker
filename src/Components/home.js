import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar";
import Title from "./title";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addTaskAction } from "../actions/add";
import { new_tasks } from "../classes/taskobj";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {v4 as uuid} from 'uuid'

var new_title, new_desc;

class Home extends Component {
  FormDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleClose2 = () => {
      new_title = document.getElementById("title").value;
      new_desc = document.getElementById("details").value;

      var nt = new new_tasks(uuid(),new_title, new_desc);

      this.addTask(nt);
      handleClose();
    };

    return (
      <div>
        <div className="float">
          <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Enter Task title and details
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter task you want to perform.
              
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="title"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="details"
              label="details"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose2} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  addTask = (taskObj) => {
    this.props.addTasks(taskObj);
  };
  render() {
    return (
      <Fragment>
        <div className="container1">
          <Title />
          <Tasksbar />
        </div>
        <this.FormDialog></this.FormDialog>
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
