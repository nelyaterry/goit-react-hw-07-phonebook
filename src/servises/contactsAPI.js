import axios from "axios";

axios.defaults.baseURL = "https://617e719b2ff7e600174bd7d5.mockapi.io/api/v1";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
