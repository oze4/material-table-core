import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IssueTracker, ToDo, Home, Demos } from '../Pages';
import { MTableDemoAppBar } from '../Components';

const useStyles = makeStyles((theme) => ({
  '@global html body': {
    backgroundColor: '#F0F0F0 !important',
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
  ptb120: {
    padding: '120px 0px',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <MTableDemoAppBar />
      <Container className={`${classes.ptb120}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/material-table-core" component={Home} />
            <Redirect exact from="/demo" to="/demo/default" />
            <Route exact path="/demo/:id" component={Demos} />
            <Route exact path="/issue-tracker" component={IssueTracker} />
            <Route exact path="/to-do" component={ToDo} />
          </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
