import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchContactsRequest = createAction(
  "contacts/fetchContactRequest"
);
//fulfilled
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactSuccess"
);
//rejected
export const fetchContactsError = createAction("contacts/fetchContactError");

export const addContactsRequest = createAction("contacts/addContactRequest");
export const addContactsSuccess = createAction("contacts/addContactSuccess");
export const addContactsError = createAction("contacts/addContactError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("contacts/UpdateFilter");
