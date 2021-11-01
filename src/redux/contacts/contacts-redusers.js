import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./contacts-actions";

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactsRequest]: () => true,
  [contactsActions.addContactsSuccess]: () => false,
  [contactsActions.addContactsError]: () => false,
  [contactsActions.deleteContactsRequest]: () => true,
  [contactsActions.deleteContactsSuccess]: () => false,
  [contactsActions.deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload.message,
  [contactsActions.fetchContactsRequest]: () => null,
  [contactsActions.addContactsError]: (_, { payload }) => payload.message,
  [contactsActions.addContactsRequest]: () => null,
  [contactsActions.deleteContactsError]: (_, { payload }) => payload.message,
  [contactsActions.deleteContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
