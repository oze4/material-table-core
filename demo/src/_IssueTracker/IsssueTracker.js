import React from 'react';
import MaterialTable from '../../../src';
import issues from './issues-may-19-2020.json';

const columns = [
  {
    title: 'Id',
    field: 'id',
  },
  {
    title: 'URL',
    field: 'url',
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
    title: 'Assignee',
    field: 'assignee',
  },
  {
    title: 'Assignees',
    field: 'assignees',
  },
  {
    title: 'Comments',
    field: 'comments',
  },
  {
    title: 'Created At',
    field: 'created_at',
  },
  {
    title: 'Updated At',
    field: 'updated_at',
  },
  {
    title: 'Resolved Internally?',
    field: 'materialTableCore.resolved',
  },
]

const IssueTracker = () => {
  return (
    <MaterialTable data={issues} columns={columns} />
  )
}

export default IssueTracker;
