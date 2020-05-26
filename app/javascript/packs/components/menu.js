import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
// import axios from 'axios';
// const getToken = () =>
  // document.querySelector('meta[name="csrf-token"]').getAttribute("content");

// const token = getToken();
// axios.post(
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
const Menu = (props) => {
  const { open, anchorEl, handleClose, children } = props;
  return (
    <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow'  >
                    {children}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>)}
    </Popper>
  );
};

export default Menu;