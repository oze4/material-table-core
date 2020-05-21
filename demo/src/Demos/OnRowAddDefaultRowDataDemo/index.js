import React, { useState } from "react";
import MaterialTable, { MTableEditRow } from "../../../../src";
import tableIcons from "../../tableIcons";

const DEFAULT_ROW_OBJECT = {
  id: "Hello, I am",
  name: "the default object!",
}

const originalData = ["Rock", "Paper", "Scissors"].map(word => ({
  id: Math.floor(Math.random() * 300),
  name: word
}));

const OnRowAddDefaultRowDataDemo = () => {
  const [data, setData] = useState(originalData);

  return (
    <MaterialTable
      data={data}
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
      editable={{
        onRowAdd: newRowData => {
          return new Promise((resolve, reject) => {
            setData(oldData => [...oldData, newRowData]);
            resolve();
          })
        }
      }}
      components={{
        EditRow: props => {
          const propsCopy = { ...props };
          propsCopy.data = DEFAULT_ROW_OBJECT;
          return <MTableEditRow {...propsCopy} />
        } 
      }}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}

export default OnRowAddDefaultRowDataDemo;
