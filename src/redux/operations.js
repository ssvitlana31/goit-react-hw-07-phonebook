import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactBase = axios.create({
  baseURL: 'https://654b26c35b38a59f28ee9569.mockapi.io',
});

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await contactBase.get('/contacts');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContactThunc = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, thunkAPI) => {
    try {
      const response = await contactBase.post('/contacts', contact);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await contactBase.delete(`/contacts/${String(id)}`);
      return response.data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
