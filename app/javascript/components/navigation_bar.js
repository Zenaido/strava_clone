import { makeStyles, Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
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
  leftSide: { flex: 1 },
  rightSide: { flexGrow: 0 },
});
const NavigationBar = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [loginModal, setLoginModal] = useState(false);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const token = getToken();
  const showLogin = useStateObserver((v) => v, loggedIn);
  const showLogout = useStateObserver((v) => !v, loggedIn);
  const history = useHistory();
  const options = useRef([
    {
      label: "Login",
      hidden: showLogin,
      onClick: () => {
        setLoginModal(true);
      },
    },
    {
      label: "Profile",
      onClick: () => {
        history.push("/dashboard");
      },
    },
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
      <div className="sticky top-0 bg-indigo-700 flex flex-1 text-2xl text-white font-sans">
        <div
          className={"flex-1 align-middle align-text-bottom m-auto mx-10 top-0"}
        >
          Test
        </div>
        <div className="flex-shrink-0 mx-8 focus:border-transparent ">
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
      </div>

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
