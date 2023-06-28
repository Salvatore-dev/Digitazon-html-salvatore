import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Selects({chose}) {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  
  return (
    <label style={{fontSize: "13px"}}>  {chose}
      <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'grey' : 'red',
         
        }),
        
      }}
        menuPosition="fixed"
        menuPlacement="auto"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </label>
  );
}
