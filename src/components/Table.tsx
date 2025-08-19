import React, { useState } from "react";

type TableProps = {
  data: { [key: string]: string | number }[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [asc, setAsc] = useState(true);

  if (data.length === 0) return <p>No data available</p>;

  const headers = Object.keys(data[0]);

  const sortData = (key: string) => {
    setAsc(sortKey === key ? !asc : true);
    setSortKey(key);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA! < valB!) return asc ? -1 : 1;
    if (valA! > valB!) return asc ? 1 : -1;
    return 0;
  });

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              scope="col"
              className="border border-gray-300 px-4 py-2 cursor-pointer bg-gray-100"
              onClick={() => sortData(header)}
            >
              {header} {sortKey === header ? (asc ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i}>
            {headers.map((header) => (
              <td key={header} className="border border-gray-300 px-4 py-2">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
