import React from 'react';
import { Typography } from '@material-ui/core';
import MaterialTable, { MTableToolbar } from '../../../src';
import issues from './issues-may-18-2020.json';

const columns = [
  {
    title: 'Resolved Internally?',
    field: 'materialTableCore.resolved',
    type: 'boolean',
  },
  {
    title: 'URL',
    field: 'url',
    render: (rowData) => (
      <a href={rowData.url} rel="noopener noreferrer" target="_blank">
        {rowData.url}
      </a>
    ),
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
    type: 'numeric',
  },
  {
    title: 'Created At',
    field: 'created_at',
    type: 'date',
  },
  {
    title: 'Updated At',
    field: 'updated_at',
    type: 'date',
  },
];

const DATE_LAST_RAN = 'May 18, 2020';
const MESSAGE = `As of ${DATE_LAST_RAN} there are ${issues.length} open issues (according to the GitHub API)`;

const IssueTracker = () => {
  return (
    <div>
      <Typography variant="h4">Issue Tracker</Typography>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>
          One of our goals is to resolve open issues in the{' '}
          <code>material-table</code> repository. This is where we track our
          progress.
        </p>
      </div>
      <MaterialTable
        title="Issues"
        data={issues}
        columns={columns}
        options={{ pageSize: 20 }}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <p style={{ margin: '20px' }}>{MESSAGE}</p>
            </div>
          )
        }}
      />
    </div>
  );
};

export default IssueTracker;
