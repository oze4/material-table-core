import React from "react";
import MaterialTable from "../../../../../src";
import tableIcons from "../../../tableIcons";
import data from './tree.json';

const columns = [
  { title: "Diagnose", field: "value", sorting: true, defaultSort: "asc" }
];

const TreeTableSearch = ({ onChange, ...rest }) => {
  const isLeaf = rowData =>
    data.find(el => el.parentId === rowData.id) === undefined;

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  return (
    <MaterialTable
      {...rest}
      title="Tree Table Search"
      data={data}
      columns={columns}
      icons={tableIcons}
      parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
      options={{
        selection: true,
        paging: false,
        sorting: true,
        search: true,
        showSelectAllCheckbox: false,
        selectionProps: rowData => ({
          disabled: !isLeaf(rowData),
          color: "primary"
        })
      }}
      onSelectionChange={rows =>
        onChange(
          rows.filter(onlyUnique).map(({ id, value }) => ({ id, value }))
        )
      }
    />
  );
}

export default TreeTableSearch;
