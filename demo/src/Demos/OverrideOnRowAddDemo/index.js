import React, { useState, useRef } from "react";
import MaterialTable, { MTableActions, MTableEditRow } from "../../../../src";
import { AddBox } from "@material-ui/icons";
import tableIcons from "../../tableIcons.js";

const originalData = ["Rock", "Paper", "Scissors"].map(word => {
  return {
    id: Math.floor(Math.random() * 300),
    name: word
  };
});

function OverrideOnRowAddDemo() {
  const tableRef = useRef();
  const [isAdding, setIsAdding] = useState(false);
  const [data, setData] = useState(originalData);

  return (
    <MaterialTable
      tableRef={tableRef}
      data={data}
      title="Override onRowAdd Demo"
      icons={tableIcons}
      columns={[
        {
          title: "Id",
          field: "id"
        },
        {
          title: "Name",
          field: "name"
        },
      ]}
      actions={[
        (rowData => ({
          position: "toolbar",
          icon: AddBox,
          tooltip: "Add row",
          onClick: (event, newRow) => {
            tableRef.current.state.showAddRow = true;
            setIsAdding(true)
          }
        }))({ position: 'toolbar' })
      ]}
      components={{
        Actions: (props, rowData) => {
          console.log({ from: 'components.Actions', props, rowData, tableRef });
          return (
            <MTableActions 
              {...props}
              onEditingCanceled={(mode, rowData) => {
                rowData.tableData.editing = undefined;
                forceUpdate();
              }}
              onEditingApproved={(mode, newData, oldData) => {
                const dataCopy = [...data];
                const index = dataCopy.indexOf(oldData);
                dataCopy[index] = newData;
                setData(dataCopy);
              }}
            />
          );
        }
      }}
      options={{
        actionsColumnIndex: -1
      }}
      localization={{
        header: {
          actions: '',
        }
      }}
    />
  );
}

export default OverrideOnRowAddDemo;
