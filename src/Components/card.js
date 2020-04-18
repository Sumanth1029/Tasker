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
import {deleteTasks} from "../actions/delete"


// import Button from '@material-ui/core/Button';

 class Taskcard extends Component {
  
  
  
    handleDelete=(taskTitle)=>{
        this.props.deleteTask(taskTitle)
    }
  
  
  
   render() {


    
    return (
      <Fragment>
       

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
            dispatch(deleteTasks(taskTitle))}
    }
}
export default connect(null,mapDispatchToProps)(Taskcard)

