import React from 'react';
import { ContactList, ContactItem, DeleteButton } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selector';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name} {number}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
