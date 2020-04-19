// import React, { Component, Fragment } from "react";
import Tasksbar from "./tasksbar";
import Title from "./title";
// import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';




// export default class Home extends Component {

//   AlertDialog=()=>{
//     const [open, setOpen] = React.useState(false);
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
//   }
  


//   render() {
//     return (
//       <Fragment>
//         <div className="container1">
//           <Title />
//           <Tasksbar />


//           <div className="push_right">
//           <Fab color="primary" aria-label="add">
//             <AddIcon />
//           </Fab>

//           {/* <this.AlertDialog/> */}


//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="container1">
           <Title />
           <Tasksbar />
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}


      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}