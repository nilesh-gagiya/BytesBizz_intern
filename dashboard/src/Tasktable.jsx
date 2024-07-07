import React, { useMemo } from 'react';
import { useTable } from 'react-table';

function TasksTable() {
  const data = useMemo(
    () => [
      {
        requester: 'Monica Geller',
        task: 'New logo',
        additionalInfo: 'Re-design our current logo to a new updated version',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Requester',
        accessor: 'requester',
      },
      {
        Header: 'Task',
        accessor: 'task',
      },
      {
        Header: 'Additional Info',
        accessor: 'additionalInfo',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="tasks-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TasksTable;
