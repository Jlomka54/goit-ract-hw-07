import axios from "axios";

const api = axios.create({
  baseURL: "https://67276a57270bd0b97552426e.mockapi.io",
});

export const apiGetContacts = async () => {
  const response = await api.get("/contacts");
  return response.data;
};
export const apiAddContacts = async (newContact) => {
  const response = await api.post("/contacts", newContact);
  return response.data;
};

export const apiDeleteContact = async (contactId) => {
  const response = await api.delete(`/contacts/${contactId}`);
  return response.data;
};
