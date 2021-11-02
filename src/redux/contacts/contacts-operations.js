import { contactsActions } from "./index";
import * as contactsAPI from "../../servises/contactsAPI";

export const fetchContact = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.getContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.addContactsRequest());

  try {
    const data = await contactsAPI.addContact(contact);
    console.log(data);
    dispatch(contactsActions.addContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactsRequest());

  try {
    await contactsAPI.deleteContact(id);
    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error));
  }
};
