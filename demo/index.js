import React, { Fragment, useState, useEffect } from 'react';
import { Link, Route, Switch, HashRouter, useHistory, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import QueryString from 'querystring';

import {
  CssBaseline,
  Container,
  Grid,
  TextField,
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
  Slide,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';

import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from './src/Components/ErrorBoundary';

// Page that displays issues and their status
import IssueTracker from './src/Pages/IssueTracker';
import ToDo from './src/Pages/ToDo';
import Home from './src/Pages/Home';

import navigationLinks from './src/navigationLinks';

// To add a new demo component, add a new object to the `demos` array below.
// Make sure the shape matches: `{ value: string, component: DemoComponent, id: unique_string }`
import DEMOS from './DEMOS';

const useStyles = makeStyles((theme) => ({
  '@global html body': {
    backgroundColor: '#F0F0F0 !important',
  },
  autocompleteContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0 40px 0',
  },
  taCenter: {
    textAlign: 'center',
  },
  mt20: {
    marginTop: '20px',
  },
  mt120: {
    marginTop: '120px',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const getDemo = (props) => {
  if (props) {
    const { id } = props.match.params;
    if (id) {
      let out = DEMOS.find((demo) => demo.id === id);
      if (out) return out;
      // For default..
      return DEMOS.find((demo) => demo.default === true);
    }
  }
  // For default..
  return DEMOS.find((demo) => demo.default === true);
};

/**
 * DEMOS PAGE
 */
const Demos = (props) => {
  const [selected, setSelected] = useState(getDemo(props).value);
  const history = useHistory();
  const classes = useStyles();

  const handleSelectionChange = (event, selectedObject, reason) => {
    setSelected(selectedObject);
    history.push('/demo/' + selectedObject.id);
  };

  React.useEffect(() => {
    setSelected(getDemo(props));
  }, [props.match.params.id])

  return (
    <Fragment>
      <Typography variant="h4">Examples</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        className={(classes.taCenter, classes.mt20)}
      >
        <Grid item xs={12}>
          <div className={classes.autocompleteContainer}>
            <Autocomplete
              options={DEMOS}
              value={selected}
              style={{ minWidth: '90%' }}
              getOptionLabel={(option) => option.value || ''}
              onChange={handleSelectionChange}
              renderInput={(params) => (
                <TextField {...params} label="Select Demo" variant="outlined" />
              )}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          {DEMOS.length &&
            DEMOS.map((demo) =>
              demo.value === selected.value ? <demo.component key={demo.id} /> : ''
            )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

/**
 * APP BAR
 */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MTableDemoAppBar = ({ links = navigationLinks}) => {
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
            TransitionComponent={Transition}
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

/**
 * APPLICATION
 */
const App = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <HashRouter>
        <CssBaseline />
        <MTableDemoAppBar />
        <Container className={classes.mt120}>
          <div style={{ marginTop: 40 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/material-table-core" component={Home} />
              <Redirect exact from="/demo" to="/demo/default" />
              <Route exact path="/demo/:id" component={Demos} />
              <Route exact path="/issue-tracker" component={IssueTracker} />
              <Route exact path="/to-do" component={ToDo} />
            </Switch>
          </div>
        </Container>
      </HashRouter>
    </ErrorBoundary>
  );
};

render(<App />, document.querySelector('#app'));
