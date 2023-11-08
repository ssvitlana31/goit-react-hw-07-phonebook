import React from 'react';
import { InputContacts } from './PhoneBook/InputContacts.jsx';
import { Contacts } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { Container, Title } from './PhoneBook/Form.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <InputContacts />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
