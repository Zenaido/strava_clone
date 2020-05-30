import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import Modal from "./modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({});
const Login = (props) => {
  const { open } = props;
  console.log(open);
  const ref = useRef(null);
  return (
    <Modal open={open} container={document.body}>
      <Paper>
        <form
          onSubmit={(e) => {
            console.log(ref.current);
            let files = ref.current.files;
            console.log(files);
            axios.post(
              "images/new",
              { image: files[0] },
              { headers: { "Content-Type": "application/json" } }
            );
          }}
        >
          <TextField helperText={"Email"} />
          <TextField helperText={"password"} />
          <input type="file" accept="image/*" ref={(r) => (ref.current = r)} />
          <input type="submit" />
        </form>
      </Paper>
    </Modal>
  );
};
export default Login;
