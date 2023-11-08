import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addNewContactThunc,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const pending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
const rejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addNewContactThunc.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchContactsThunk.pending, addNewContactThunc.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addNewContactThunc.rejected,
          deleteContactThunk.rejected
        ),
        rejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
