import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactsName = state.contacts.map(el => el.name);
        const name = action.payload.name;
        contactsName.includes(name)
          ? alert(`${name} is already in contacts`)
          : state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    delContact(state, action) {
      const delID = action.payload.id;
      state.contacts = state.contacts.filter(contact => contact.id !== delID);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
