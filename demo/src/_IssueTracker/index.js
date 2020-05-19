import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import MaterialTable from '../../../src';
import issues from './issues-may-18-2020.json';

const columns = [
  {
    title: 'Resolved Internally?',
    field: 'materialTableCore.resolved',
    type: 'boolean'
  },
  {
    title: 'URL',
    field: 'url',
    render: rowData => <a href={rowData.url} rel="noopener noreferrer" target="_blank">{rowData.url}</a>
  },
  {
    title: 'Title',
    field: 'title',
  },
  {
    title: 'User',
    field: 'user',
  },
  {
    title: 'State',
    field: 'state',
  },
  {
    title: 'Comments',
    field: 'comments',
    type: 'numeric'
  },
  {
    title: 'Created At',
    field: 'created_at',
    type: 'date'
  },
  {
    title: 'Updated At',
    field: 'updated_at',
    type: 'date'
  }
]

const DATE_LAST_RAN = "May 18, 2020";
const MESSAGE = `As of ${DATE_LAST_RAN} there are ${issues.length} open issues (according to the GitHub API)`

const IssueTracker = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant={matches ? 'h4' : 'h6'}>{MESSAGE}</Typography>
      </div>
      <MaterialTable title="Issues" data={issues} columns={columns} options={{ pageSize: 20 }} />
    </div>
  )
}

export default IssueTracker;
