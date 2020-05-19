import React, { Fragment, useState } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import toDos from './toDos';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box p={3}>
        {children}
      </Box>
    )}
  </div>
);

const TabPanelBody = ({ title = '', description = '' }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>{description}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const ToDo = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabsChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Tabs
          value={selectedTab}
          onChange={handleTabsChange}
          variant="fullWidth"
        >
          <Tab label="To Do" />
          <Tab label="Completed" />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        {toDos.filter(t => !t.completed).map(i => 
          <TabPanelBody key={i.id} title={i.title} description={i.description} />)}
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        {toDos.filter(t => t.completed).map(i => 
            <TabPanelBody key={i.id} title={i.title} description={i.description} />)}
      </TabPanel>
    </Fragment>
  );
};

export default ToDo;
