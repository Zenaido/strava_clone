import React from "react";
import MuiModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  modalBody: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});
const Modal = (props) => {
  const { children, open, ...rest } = props;
  const classes = useStyles();
  return (
    <MuiModal open={open} {...rest}>
      <div className={classes.modalBody}>{children}</div>
    </MuiModal>
  );
};
export default Modal;
