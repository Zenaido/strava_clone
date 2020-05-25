import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import React from "react";
import { makeStyles } from "@material-ui/core";

const NavigationBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar placement="bottom">
        <div>Test</div>
        <IconButton
          onClick={() => {
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
