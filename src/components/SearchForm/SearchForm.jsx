import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchForm.styled';

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
      <Form>
        <Input type="text" onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
