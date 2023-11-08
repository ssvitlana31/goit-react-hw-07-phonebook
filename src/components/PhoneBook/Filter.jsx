import React from 'react';
import { FilterInput } from './Form.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeValue = e => dispatch(filterContacts(e.target.value));
  return (
    <div>
      <FilterInput type="text" name="filter" onChange={onChangeValue} />
    </div>
  );
};
