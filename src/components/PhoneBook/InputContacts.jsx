import React from 'react';
import { useState } from 'react';
import { Form, Label, Input, Button } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selector';
import { addNewContactThunc } from 'redux/operations';

const initialState = {
  name: '',
  number: '',
};

export const InputContacts = () => {
  const [inputData, setInputData] = useState(initialState);
  const { name, number } = inputData;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = contacts.some(
      newName => newName.name.toLowerCase() === name.toLowerCase()
    );
    if (newContact) {
      alert(`${name} is already exist`);
      return;
    }

    dispatch(addNewContactThunc({ name, number, id: nanoid() }));
    setInputData(initialState);
  };

  const handleInputChange = e =>
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    </>
  );
};
