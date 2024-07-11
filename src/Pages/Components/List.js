import React from "react";
import { Table } from "react-bootstrap";

const List = ({ headers, filteredData }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, i) => (
            <tr key={i}>
              {headers.map((header, index) => (
                <td key={index}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;
