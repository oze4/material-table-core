import React from 'react';
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

const IssueTracker = () => {
  return (
    <div>
      <h1>{`As of May 18, 2020 there are ${issues.length} open issues`}</h1>
      <MaterialTable title="Issues" data={issues} columns={columns} options={{ pageSize: 20 }} />
    </div>
  )
}

export default IssueTracker;
