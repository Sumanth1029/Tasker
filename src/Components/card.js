import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { deleteTasks } from "../actions/delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class Taskcard extends Component {
  handleDelete = (taskTitle) => {
    this.props.deleteTask(taskTitle);
  };

  AlertDialog = (title) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose3 = () => {
      setOpen(false);
    };

    const handleClose2 = () => {
      this.handleDelete(title.title);
      setOpen(false);
    };

    return (
      <div>
        <IconButton aria-label="delete" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete "+title.title+" ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tasks once deleted cannot be recovered
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="primary">
              Delete
              
            </Button>
            <Button onClick={handleClose3} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };


  



   
  render() {
    return (
      <Fragment>
        <Card className="root  ">
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="text-center"
              >
                {this.props.data.taskTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                {this.props.data.taskDesc }</ul>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <this.AlertDialog
              title={this.props.data.taskTitle}
            ></this.AlertDialog>
          </CardActions>
        </Card>
      
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
