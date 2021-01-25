import React from "react";
import _ from "lodash";

function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.path || column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
}

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  const createKey = (item, column) => item.id + (column.path || column.key);

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ data, columns }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-dark">
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
