import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});
