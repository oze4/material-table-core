import React, { useState, Fragment } from 'react';
import { render } from 'react-dom';
import { CssBaseline, Container, Grid, TextField, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from './ErrorBoundary';

import OriginalDemo from './src/OriginalDemo/demo';
import BasicDemo from './src/BasicDemo';
import OverrideOnRowAddDemo from './src/OverrideOnRowAddDemo';

/**
 * To add a new demo component, add a new object to the `demos` array below.
 * Make sure the shape matches: `{ value: string, component: DemoComponent, id: unique_string }`
 */
const DEMOS = [
  {
    value: 'Original material-table Demo',
    component: OriginalDemo,
    id: '000',
  },
  {
    value: 'Basic Demo',
    component: BasicDemo,
    id: '001',
  },
  {
    value: 'Override onRowAdd',
    component: OverrideOnRowAddDemo,
    id: '002',
  },
];

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
}));

const App = () => {
  const [selected, setSelected] = useState('');
  const classes = useStyles();

  const handleSelectionChange = (event, selectedObject, reason) =>
    setSelected(selectedObject.value);

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            @material-table/core Demo's
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.mt20}>
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
                style={{ width: 400 }}
                getOptionLabel={(option) => option.value}
                onChange={handleSelectionChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Demo"
                    variant="outlined"
                  />
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
      </Container>
    </Fragment>
  );
};

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.querySelector('#app')
);
