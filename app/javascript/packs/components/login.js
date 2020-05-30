import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import Modal from './modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({

})
const Login = (props) => {
  const {open} = props;
  console.log(open)
  return (
    <Modal open={open} container={document.body}>
      <Paper>
      <TextField helperText={'Email'}/>
      <TextField helperText={'password'}/>
      </Paper>
      
    </Modal>

    
  )
}
export default Login;