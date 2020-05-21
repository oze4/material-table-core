import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SimpleCard from '../../Components/SimpleCard';
import navigationLinks from '../../navigationLinks';

const useStyles = makeStyles({
  hover: {
    transition: 'transform .2s;',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
});

const Home = ({ links = navigationLinks }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {links
        .filter((nl) => nl.to !== '/')
        .map((link) => (
          <Grid
            className={classes.hover}
            key={link.id}
            item
            xs={12}
            md={4}
            component={RouterLink}
            to={link.to}
          >
            <SimpleCard
              title={link.title}
              actions={
                <IconButton>
                  <link.icon />
                </IconButton>
              }
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
