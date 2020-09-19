import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import React, { Fragment, useRef, useState } from "react";
import { getToken } from "../state/logged_in";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useRecoilValue } from "recoil";
import Modal from "./modal";

const useStyles = makeStyles({
  grid: { padding: 30 },
});
const Login = (props) => {
  const { open, handleClose } = props;
  const [isSignUp, setSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const classes = useStyles(props);
  const ref = useRef(null);

  return (
    <Modal open={open} onClose={handleClose} disableForceFocus>
      <Paper>
        <form>
          <Grid container >
            <Grid item md={12}>
              <h1>{isSignUp ? "Sign up" : "Login"}</h1>
            </Grid>
            <Grid item md={6}>
              <TextField
              fullWidth
              variant={'outlined'}
                helperText={"Email"}
                onChange={(e) => {
                  let text = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    email: text,
                  }));
                }}
              />
              </Grid>
              <Grid item md={6}>
              <TextField
              fullWidth
                type="password"
                helperText={"password"}
                onChange={(e) => {
                  let text = e.target.value;
                  console.log(e.target);
                  setFormData((prev) => ({
                    ...prev,
                    password: text,
                  }));
                }}
              />
            </Grid>

            {isSignUp && (
              <Grid item md={6}>
                <TextField
                  helperText={"Confirm Password"}
                  onChange={(e) => {
                    let text = e.target.value;
                    console.log(e.target);
                    setFormData((prev) => ({
                      ...prev,
                      password_confirmation: text,
                    }));
                  }}
                />
              </Grid>
            )}


            <Button
              variant="contained"
              color="primary"
              // classes={{ root: classes.root }}
              onClick={() => {
                setSignUp((prev) => !prev);
              }}
            >
              {isSignUp ? "Login" : "Sign up"}
            </Button>

            <Button
              onClick={async (e) => {
                e.preventDefault();
                const url = isSignUp ? "/users" : "/users/sign_in";
                const data = isSignUp
                  ? formData
                  : _.omit(formData, "password_confirmation");
                const response = await axios.post(
                  url,
                  { user: data },
                  {
                    headers: {
                      "X-CSRF-Token": getToken(),
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                  }
                );
                handleClose(response);
              }}
              {..._.omit(props, ["inputRef", "handleClose"])}
              ref={_.get(props, "inputRef")}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
};
export default Login;
