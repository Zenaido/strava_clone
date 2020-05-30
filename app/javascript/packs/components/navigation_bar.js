import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
import React, { Fragment, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "./menu";
import Login from "./login";
import { loggedInState } from "../state/logged_in";
import { useRecoilValue, useSetRecoilState } from "recoil";
const getToken = () =>
  document.querySelector('meta[name="csrf-token"]').getAttribute("content");

const useStyles = makeStyles({
  leftSide: { flex: 80 },
  rightSide: { flex: 4 },
});

const NavigationBar = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [loginModal, setLoginModal] = useState(false);
  const setLoggedIn = useSetRecoilState(loggedInState);

  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    console.log("howdy 2");
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar placement="bottom">
          <div className={classes.leftSide}>Test</div>
          <div className={classes.rightSide}>
            <IconButton
              ref={anchorRef}
              onClick={() => {
                handleToggle();
              }}
            >
              <AccountCircleRoundedIcon htmlColor="white" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorRef.current}
        open={Boolean(open)}
        handleClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={async (e) => {
            const token = getToken();
            setLoginModal(true);
            // const response = await axios.post(
            //   "/users/sign_in",
            //   {
            //     user: {
            //       email: "lzhernandez90@gmail.com",
            //       password: "Tackjkjk23obell4379!",
            //       password_confirmation: "Tackjkjk23obell4379!",
            //     },
            //   },
            //   {
            //     headers: {
            //       "X-CSRF-Token": token,
            //     },
            //   }
            // );
            // if (response.status === 200) {
            //   setLoggedIn(true);
            // }
          }}
        >
          Login
        </MenuItem>
        <MenuItem
          onClick={async (e) => {
            handleClose(e);
            const token = getToken();
            const response = await axios.get("/users/sign_out", {
              headers: {
                "X-CSRF-Token": token,
              },
            });
            if (response.status === 200) {
              setLoggedIn(false);
            }
            console.log(response.status);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      <Login open={loginModal} />
    </Fragment>
  );
};

export default NavigationBar;
