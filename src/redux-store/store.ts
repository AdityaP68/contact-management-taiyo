
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";

// Configure the Redux store with the contacts reducer
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// Export the configured Redux store
export default store;
