import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Grid,
  TextField,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Code as CodeIcon } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import DEMOS from '../../../DEMOS';

const useStyles = makeStyles((theme) => ({
  autocompleteContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0 40px 0',
  },
  taCenter: {
    textAlign: 'center',
  },
  taRight: {
    textAlign: 'right',
  },
  mt20: {
    marginTop: '20px',
  },
}));

const getDefaultDemo = () => DEMOS.find((demo) => demo.default === true);

const getDemo = (props) => {
  if (!props) {
    // For default..
    return getDefaultDemo();
  }

  const { id } = props.match.params;
  if (id) {
    let out = DEMOS.find((demo) => demo.id === id);
    if (!out) {
      out = getDefaultDemo();
    }

    return out;
  }
};

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
  }, [props.match.params.id]);

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
              demo.value === selected.value ? (
                <Fragment>
                  {demo.publicUrl ? (
                    <div className={classes.taRight}>
                      <Tooltip title="View Source">
                        <IconButton
                          component="a"
                          href={demo.publicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CodeIcon fontSize="large" color="secondary" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  ) : (
                    ''
                  )}
                  <demo.component key={demo.id} />
                </Fragment>
              ) : (
                ''
              )
            )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Demos;
