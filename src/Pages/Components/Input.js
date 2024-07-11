import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";

const Input = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="inner-column">
      <Card.Title>Search</Card.Title>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="search-bar"
      />
    </div>
  );
};

export default Input;
