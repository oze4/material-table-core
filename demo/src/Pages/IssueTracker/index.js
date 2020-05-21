import React from 'react';
import {
  Typography,
  IconButton,
  Tooltip,
  ButtonGroup,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link as LinkIcon } from '@material-ui/icons';
import MaterialTable from '../../../../src';
import resolvedIssues from './resolved_issues.json';

const useStyles = makeStyles(theme => ({
  btnGroupContainer: {
    textAlign: 'center',
  },
  btnGroup: {
    marginBottom: '20px',
  }
}));

const columns = [
  {
    title: 'Link',
    field: 'url',
    render: (rowData) => (
      <Tooltip title={rowData.url}>
        <IconButton
          component="a"
          href={rowData.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkIcon />
        </IconButton>
      </Tooltip>
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

const datas = resolvedIssues.map((data) => ({
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

const linkButtons = [
  {
    text: "How To Mark Issue As Resolved",
    href: "https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#mark-issue-as-resolved",
    id: 0,
  },
  {
    text: "How To Update Issue Tracker",
    href: "https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#to-update-issue-tracker",
    id: 1,
  },
  {
    text: "Live Query Resolved Issues/Pull Requests",
    href: "https://api.github.com/search/issues?q=repo:mbrn/material-table+/mtc::resolved+in:comments",
    id: 2,
  }, 
]

const IssueTracker = () => {
  const classes = useStyles();

  const handleLink = (event, href) => {
    window.open(href, '_blank').opener = null;
  }

  return (
    <div>
      <Typography variant="h4">Issue Tracker</Typography>
      <p>
        One of our goals is to resolve open issues/pull requests in the{' '}
        <code>material-table</code> repository. This is where we track our
        progress.
      </p>
      <div className={classes.btnGroupContainer}>
        <ButtonGroup
          disableElevation
          size="small"
          variant="outlined"
          color="primary"
          className={classes.btnGroup}
        >
          {linkButtons.map(btn => (
            <Button onClick={e => handleLink(e, btn.href)} key={btn.id}>
              {btn.text}
            </Button>
          ))}
        </ButtonGroup>
      </div>
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
