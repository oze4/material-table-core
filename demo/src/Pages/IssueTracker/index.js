import React from 'react';
import { Typography } from '@material-ui/core';
import MaterialTable from '../../../../src';
import resolvedIssues from './resolved_issues.json';

const columns = [
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

const datas = resolvedIssues.map(data => ({
  id: data.id,
  url: data.html_url,
  title: data.title,
  user: data.user.login,
  state: data.state,
  assignee: data.assignee,
  assignees: data.assignees,
  comments: data.comments,
  created_at: data.created_at,
  updated_at: data.updated_at,
  materialTableCore: {
    resolved: false,
  }
}));

const IssueTracker = () => {
  return (
    <div>
      <Typography variant="h4">Issue Tracker</Typography>
      <p>
        One of our goals is to resolve open issues in the{' '}
        <code>material-table</code> repository. This is where we track our
        progress.
      </p>
      <MaterialTable
        title="Resolved Issues"
        data={datas}
        columns={columns}
        options={{ pageSize: 5 }}
      />
    </div>
  );
};

export default IssueTracker;
