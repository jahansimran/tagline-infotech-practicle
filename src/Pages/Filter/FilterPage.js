import React, { useState } from "react";
import { data } from "../Data/Data";
import Input from "../Components/Input";
import List from "../Components/List";
import SwitchSection from "../Components/SwitchSection";

const FilterPage = () => {
  // Get the keys from the first object in the array to create the table headers
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  // State to hold filter criteria for each header
  const [filters, setFilters] = useState({});

  // State to hold search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to get unique values for each header
  const getUniqueValues = (header) => {
    const uniqueValues = new Set();
    data.forEach((item) => {
      if (item[header] !== undefined) {
        uniqueValues.add(item[header]);
      }
    });
    return [...uniqueValues];
  };

  // Function to handle switch toggle
  const handleSwitchToggle = (header, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[header]?.includes(value)) {
        newFilters[header] = newFilters[header].filter((v) => v !== value);
        if (newFilters[header].length === 0) {
          delete newFilters[header];
        }
      } else {
        newFilters[header] = newFilters[header]
          ? [...newFilters[header], value]
          : [value];
      }
      return newFilters;
    });
  };

  // Function to filter data based on the active filters and search query
  const getFilteredData = () => {
    return data.filter((item) => {
      const matchesSearchQuery = headers.some((header) =>
        item[header]
          ?.toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      const matchesFilters = Object.keys(filters).every((header) =>
        filters[header].includes(item[header])
      );
      return matchesSearchQuery && matchesFilters;
    });
  };

  const filteredData = getFilteredData();

  return (
    <div className="main-container">
      <div className="upper-half-wrapper">
        <SwitchSection
          headers={headers}
          getUniqueValues={getUniqueValues}
          filters={filters}
          handleSwitchToggle={handleSwitchToggle}
        />

        <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="second-half-wrapper">
        <List headers={headers} filteredData={filteredData} />
      </div>
    </div>
  );
};

export default FilterPage;
