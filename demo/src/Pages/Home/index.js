import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';

import SimpleCard from '../../Components/SimpleCard';
import navigationLinks from '../../navigationLinks';

const Home = ({ links = navigationLinks }) => {
  return (
    <Grid container spacing={2}>
      {links
        .filter((nl) => nl.to !== '/')
        .map((link) => (
          <Grid
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
