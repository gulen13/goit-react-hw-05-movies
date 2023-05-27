import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      alert('Enter film name');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
