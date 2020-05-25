import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const Menu = (props) => {
  const { open, anchorEl, handleClose, children } = props;
  const l = React.Children.map(children, (child) => { return <MenuItem key={child} onClick={handleClose}>{child}</MenuItem>});
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
                    {l}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>)}
    </Popper>
  );
};

export default Menu;