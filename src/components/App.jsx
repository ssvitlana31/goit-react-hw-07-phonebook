import React, { useEffect } from 'react';
import { InputContacts } from './PhoneBook/InputContacts.jsx';
import { Contacts } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { Container, Title } from './PhoneBook/Form.styled';
import { Loader } from './PhoneBook/Loader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoader } from 'redux/selector.js';
import { fetchContactsThunk } from 'redux/operations.js';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <InputContacts />

      <h2>Contacts</h2>
      <Filter />
      {!loading ? <Contacts /> : <Loader />}
    </Container>
  );
};
