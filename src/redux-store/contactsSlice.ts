import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../utils/types";

// Define the state shape
type ContactsState = {
  contacts: Contact[];
};

// Initial state with example contact data
const initialState: ContactsState = {
  contacts: [
    { id: "1", name: "John Doe", email: "email@gmail.com", phone: 1234567 },
    { id: "2", name: "Jack Harlow", email: "jack@gmail.com", phone: 1234567 },
    {
      id: "3",
      name: "Travis Scott",
      email: "travis@gmail.com",
      phone: 1234567,
    },
    { id: "4", name: "SZA", email: "work.sza@gmail.com", phone: 1234567 },
  ],
};

// Create a slice using createSlice
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // Reducer for adding a contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // Reducer for editing a contact
    editContact: (state, action: PayloadAction<Contact>) => {
      const editedContact = action.payload;
      const index = state.contacts.findIndex((c) => c.id === editedContact.id);
      if (index !== -1) {
        state.contacts[index] = editedContact;
      }
    },
    // Reducer for deleting a contact
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Export action creators
export const { addContact, editContact, deleteContact } = contactsSlice.actions;

// Export the reducer
export default contactsSlice.reducer;
