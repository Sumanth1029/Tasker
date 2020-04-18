import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios"
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


// import Button from '@material-ui/core/Button';

 class Taskcard extends Component {
  
  
  
    handleDelete=(taskTitle)=>{
        this.props.deleteTask(taskTitle)
    }
  
  
  
   render() {


    
    return (
      <Fragment>
        {/* <div className="card" key={this.props.data._id}>
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
        </div> */}

        <Card className="root">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="text-center">
                {this.props.data.taskTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.data.taskDesc&&this.props.data.taskDesc.map((item)=>(
                    <ol key={item}>
                        {item}
                    </ol>
                ))
            }
              </Typography>
            </CardContent>
          </CardActionArea >
          <CardActions >
            

          <IconButton aria-label="delete" onClick={()=>{this.handleDelete(this.props.data.taskTitle)}}>
        <DeleteIcon />
      </IconButton>
            
          </CardActions>
        </Card>
      </Fragment>
    );
  }
}



const mapDispatchToProps=(dispatch)=>{
    return{
        deleteTask:(taskTitle)=>{
            dispatch({type:'DELTE_TASK',taskTitle:taskTitle})}
    }
}
export default connect(mapDispatchToProps)(Taskcard)



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function Taskcard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {console.log(this.props.data)}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
