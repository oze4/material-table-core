import React, { useState, Fragment } from "react";
import MaterialTable, { MTableBodyRow } from "../../../../../src";
import tableIcons from "../../../tableIcons";

const data = [
  {
    firstName: "Rivers",
    lastName: "Cuomo",
  },
  {
    firstName: "Patrick",
    lastName: "Wilson",
  },
  {
    firstName: "Brian",
    lastName: "Bell",
  },
  {
    firstName: "Scott",
    lastName: "Shiner",
  },
]

const columns = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" }
];

const BasicDemo = () => {
  return (
    <MaterialTable
      title="Basic Demo"
      data={data}
      columns={columns}
      icons={tableIcons}
    />
  );
};

export default BasicDemo;
