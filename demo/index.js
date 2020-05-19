import React, { useState } from 'react';
import { Link, Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import {
  CssBaseline,
  Container,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from '@material-ui/core';
import {
  BugReport as BugReportIcon,
  Home as HomeIcon,
} from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from './ErrorBoundary';

// Page that displays issues and their status
import IssueTracker from './src/_IssueTracker';
import ToDo from './src/_ToDo';

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

const findDefaultDemo = () => DEMOS.find((d) => d.default);

const Home = () => {
  const [selected, setSelected] = useState(findDefaultDemo().value);
  const classes = useStyles();

  const handleSelectionChange = (event, selectedObject, reason) =>
    setSelected(selectedObject.value);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
      className={classes.taCenter}
    >
      <Grid item xs={12}>
        <div className={classes.autocompleteContainer}>
          <Autocomplete
            options={DEMOS}
            defaultValue={findDefaultDemo()}
            style={{ width: 400 }}
            getOptionLabel={(option) => option.value}
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
            demo.value === selected ? <demo.component key={demo.id} /> : ''
          )}
      </Grid>
    </Grid>
  );
};

const MTableDemoAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          material-table Examples
        </Typography>
        <Tooltip title="Examples">
          <Link to="/">
            <IconButton style={{ color: 'white' }}>
              <HomeIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Issue Tracker">
          <Link to="/issue-tracker">
            <Button style={{ color: 'white' }}>
              <BugReportIcon />
            </Button>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <HashRouter>
        <MTableDemoAppBar />
        <CssBaseline />
        <Container className={classes.mt20}>
          <div style={{ marginTop: 40 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/material-table-core" component={Home} />
              <Route exact path="/issue-tracker" component={IssueTracker} />
            </Switch>
          </div>
        </Container>
      </HashRouter>
    </ErrorBoundary>
  );
};

render(<App />, document.querySelector('#app'));
