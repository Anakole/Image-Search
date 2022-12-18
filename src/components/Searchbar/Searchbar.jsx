import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Header,
  Form,
  FormButton,
  FormButtonLabel,
  FormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Enter the query...');
    }

    onSubmit(query);
    setQuery('');

    e.target.query.value = '';
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <FormButton type="submit">
          <FormButtonLabel>Search</FormButtonLabel>
        </FormButton>

        <FormInput
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
