import ReactSelect from "react-select";
import React, { useState } from 'react';
const options = [
  { label: "No 1", value: "test_1" },
  { label: "No 2", value: "test_2" },
  { label: "No 3", value: "test_3" },
  { label: "No 4", value: "test_4" },
];

export default function Provo() {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  return (
    <div className="page-wrapper">
      <div className="select-container">
        <ReactSelect
          menuPosition="fixed"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          menuPlacement="auto"
        />
      </div>
    </div>
  );
}
