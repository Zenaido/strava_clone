import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import axios from 'axios'
import React from "react";
import { makeStyles } from "@material-ui/core";

const getToken = () =>
  document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const NavigationBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar placement="bottom">
        <div>Test</div>
        <IconButton
          onClick={async () => {
            const token = getToken();
            axios.post('/users/sign_in',{user: {email: 'lzhernandez90@gmail.com', password:'Tackjkjk23obell4379!', password_confirmation: 'Tackjkjk23obell4379!'}}, {
              headers: {
                'X-CSRF-Token': token,
              }
            });

            console.log("howdy");
          }}
        >
          <AccountCircleRoundedIcon htmlColor="white" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
