import React, { useState } from "react";
import MaterialTable from "../../../../../src";
import tableIcons from "../../../tableIcons";

const originalData = ["Rock", "Paper", "Scissors"].map(word => ({
  id: Math.floor(Math.random() * 300),
  name: word
}));

const ExportCsvWhenColumnTitleIsNotText = () => {
  const [data, setData] = useState(originalData);

  return (
    <MaterialTable
      data={data}
      title={<small>Export CSV When Col Title Isn't Text</small>}
      icons={tableIcons}
      columns={[
        {
          field: "id",
          titleAsText: () => "Id",
          title: <h3>Id</h3>,
          render: rowData => <h3>{rowData.id}</h3>
        },
        {
          field: "name",
          titleAsText: () => "Name",
          title: <h3>Name</h3>,
          render: rowData => <h3>{rowData.name}</h3>
        },
      ]}
      options={{
        exportButton: true
      }}
    />
  );
}

export default ExportCsvWhenColumnTitleIsNotText;
