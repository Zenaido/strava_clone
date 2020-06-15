import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { getToken, loggedInState, setToken } from "../state/logged_in";

import Menu from "./drop_down_menu";
import Login from "./login";

const useStateObserver = (modifier, value) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = modifier(value);
  }, [value]);
  return ref;
};

const useStyles = makeStyles({
  leftSide: { flex: 80 },
  rightSide: { flex: 4 },
});
const NavigationBar = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [loginModal, setLoginModal] = useState(false);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const token = getToken();
  const showLogin = useStateObserver((v) => v, loggedIn);
  const showLogout = useStateObserver((v) => !v, loggedIn);

  const options = useRef([
    {
      label: "Login",
      hidden: showLogin,
      onClick: () => {
        setLoginModal(true);
      },
    },
    { label: "Profile" },
    {
      hidden: showLogout,
      label: "Logout",
      onClick: async (e) => {
        const response = await axios.get("/users/sign_out", {
          headers: {
            "X-CSRF-Token": token,
            Accept: "application/json",
          },
        });
        console.log(response);
        if (response.status === 200 || response.status === 204) {
          const {
            data: { csrfToken },
          } = response;
          setToken(csrfToken);
          setLoggedIn(false);
        }
      },
    },
  ]);
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.leftSide}>Test</div>
          <div className={classes.rightSide}>
            <Menu
              Container={(props) => {
                const { anchorRef, onClick: handleToggle } = props;
                return (
                  <IconButton
                    size="medium"
                    ref={anchorRef}
                    onClick={handleToggle}
                  >
                    <AccountCircleRoundedIcon htmlColor="white" />
                  </IconButton>
                );
              }}
              options={options.current}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Login
        open={loginModal}
        handleClose={async (response, test) => {
          console.log(response, test);
          if (test) {
            setLoginModal(false);
          }
          if (response.status === 200 || response.status === 201) {
            setLoggedIn(true);
            setLoginModal(false);
          }
        }}
      />
    </Fragment>
  );
};

export default NavigationBar;
