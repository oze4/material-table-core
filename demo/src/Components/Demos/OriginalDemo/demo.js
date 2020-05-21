import { Grid, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import MaterialTable from '../../../../../src';
import Typography from "@material-ui/core/Typography";

import * as apiData from "./data.js";
import tableIcons from '../../../tableIcons';

let direction = 'ltr';

const theme = createMuiTheme({
  direction,
  palette: {
    type: 'light'
  }
});

const bigData = [];
for (let i = 0; i < 1; i++) {
  const d = {
    id: i + 1,
    name: 'Name' + i,
    surname: 'Surname' + Math.round(i / 10),
    isMarried: i % 2 ? true : false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: i % 2 ? 'Male' : 'Female',
    type: 'adult',
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35)
  };
  bigData.push(d);
}

class OriginalDemo extends Component {
  tableRef = React.createRef();

  colRenderCount = 0;

  state = {
    text: 'text',
    selecteds: 0,
    data: apiData.data,
    columns: apiData.columns,
    remoteColumns: apiData.remoteColumns,
  }

  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <div style={{ maxWidth: '100%', direction }}>

            <Grid container>
              <Grid item xs={12}>
                {this.state.selectedRows && this.state.selectedRows.length}
                <MaterialTable
                  tableRef={this.tableRef}
                  columns={this.state.columns}
                  data={this.state.data}
                  title="Demo Title"
                  icons={tableIcons}
                  onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                  options={{
                    fixedColumns: {
                      left: 2,
                      right: 0
                    },
                    tableLayout: 'fixed'
                  }}
                />
              </Grid>
            </Grid>

            {this.state.text}

            <button onClick={() => this.tableRef.current.onAllSelected(true)} style={{ margin: 10 }}>
              Select
            </button>

            <MaterialTable
              title={<Typography variant='h6' color='primary'>Remote Data Preview</Typography>}
              
              columns={[
                {
                  title: 'Avatar',
                  field: 'avatar',
                  render: rowData => (
                    <img
                      style={{ height: 36, borderRadius: '50%' }}
                      src={rowData.avatar}
                    />
                  ),
                },
                { title: 'Id', field: 'id', filterPlaceholder: 'placeholder' },
                { title: 'First Name', field: 'first_name' },
                { title: 'Last Name', field: 'last_name' },
              ]}
              
              options={{
                filtering: true,
                grouping: true,
                groupTitle: group => group.data.length,
              }}
              data={query => new Promise((resolve, reject) => {
                let url = 'https://reqres.in/api/users?'
                url += 'per_page=' + query.pageSize
                url += '&page=' + (query.page + 1)
                fetch(url)
                  .then(response => response.json())
                  .then(result => {
                    resolve({
                      data: result.data,
                      page: result.page - 1,
                      totalCount: result.total,
                    })
                  })
              })}
            />
          </div>
        </MuiThemeProvider>
      </>
    );
  }
}

export default OriginalDemo;
