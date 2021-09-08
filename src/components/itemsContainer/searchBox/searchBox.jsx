import React, { useState } from 'react';

import './searchBox.css';

const SearchBox = ({onChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    console.log('inputValue: ', newValue);

    onChange(newValue); // callback from father
  };

  return (
    <input
      type="text"  
      placeholder="Which emoji are you looking for?"
      value={inputValue}
      onChange={handleInputChange} />
  );
}

export default SearchBox;




