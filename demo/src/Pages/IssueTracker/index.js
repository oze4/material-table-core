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
    title: 'Type',
    field: 'type',
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
  type: data.type,
}));

const AText = ({ title = "", ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" {...rest}>{title}</a>
)

const HowToMarkIssueAsResolved = ({ text = "" }) => (
  <AText title={text} href="https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#mark-issue-as-resolved" />
);

const HowToUpdateIssueTracker = ({ text = "" }) => (
  <AText title={text} href="https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#to-update-issue-tracker" />
);

const LiveResolvedIssues = ({ text = "" }) => (
  <AText title={text} href="https://api.github.com/search/issues?q=repo:mbrn/material-table+is:open+is:issue+/mtc::resolved+in:comments" />
)

const IssueTracker = () => {
  return (
    <div>
      <Typography variant="h4">Issue Tracker</Typography>
      <p>
        One of our goals is to resolve open issues/pull requests in the{' '}
        <code>material-table</code> repository. This is where we track our
        progress.
      </p>
      <p>
        * See <HowToMarkIssueAsResolved text="here for more on how to" /> mark an issue/pull request as resolved.<br />
        * See <HowToUpdateIssueTracker text="here for more on how to" /> update the Issue Tracker after marking an issue as resolved.
      </p>
      <h4><LiveResolvedIssues text="Click here for a live view of resolved issues/pull requests" /></h4>
      <MaterialTable
        title="Resolved Issues &amp; Pull Requests"
        data={datas}
        columns={columns}
        options={{ pageSize: 5 }}
      />
    </div>
  );
};

export default IssueTracker;
