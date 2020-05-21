import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';

import SlideUpTransition from './SlideUpTransition';
import navigationLinks from '../../src/navigationLinks';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const MTableDemoAppBar = ({ links = navigationLinks }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          material-table Examples
        </Typography>
        <Hidden mdUp>
          <IconButton onClick={handleOpenDialog} style={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          <Dialog
            fullScreen
            open={open}
            keepMounted
            TransitionComponent={SlideUpTransition}
            onClose={handleCloseDialog}
            onEscapeKeyDown={handleCloseDialog}
          >
            <AppBar color="secondary">
              <Toolbar>
                <div style={{ flex: 1 }}></div>
                <IconButton
                  style={{ color: 'white' }}
                  onClick={handleCloseDialog}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div style={{ marginTop: '90px' }}>
              <List component="nav">
                {links.map((l) => (
                  <ListItem
                    button
                    key={l.id}
                    component={Link}
                    to={l.to}
                    onClick={handleCloseDialog}
                  >
                    <ListItemIcon>
                      <l.icon />
                    </ListItemIcon>
                    <ListItemText primary={l.title} />
                  </ListItem>
                ))}
                <ListItem
                  button
                  component="a"
                  target="_blank"
                  href="https://github.com/oze4/material-table-core"
                >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="GitHub Repository" />
                </ListItem>
              </List>
            </div>
          </Dialog>
        </Hidden>
        <Hidden smDown>
          {links.map((l) => (
            <Tooltip key={l.id} title={l.title}>
              <Link to={l.to}>
                <IconButton style={{ color: 'white' }}>
                  <l.icon />
                </IconButton>
              </Link>
            </Tooltip>
          ))}
          <IconButton
            target="_blank"
            href="https://github.com/oze4/material-table-core"
            style={{ color: 'white' }}
          >
            <GitHubIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default MTableDemoAppBar;
