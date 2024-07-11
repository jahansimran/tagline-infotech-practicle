import React from "react";
import { Card, Form } from "react-bootstrap";

const SwitchSection = ({
  headers,
  getUniqueValues,
  filters,
  handleSwitchToggle,
}) => {
  return (
    <>
      {headers.map((header, index) => (
        <div className="inner-column" key={index}>
          <Card.Title>
            {header.charAt(0).toUpperCase() + header.slice(1)}
          </Card.Title>
          <ul>
            {getUniqueValues(header).map((value, i) => (
              <div key={i}>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${header}-${i}`}
                  label={value}
                  onChange={() => handleSwitchToggle(header, value)}
                  checked={filters[header]?.includes(value) || false}
                />
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SwitchSection;
