import React from "react";
import MuiModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const Body = React.forwardRef((props, ref) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.modalBody} ref={ref}>
      {children}
    </div>
  );
});
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
  return (
    <MuiModal open={open} {...rest}>
      <Body>{children}</Body>
    </MuiModal>
  );
};
export default Modal;
