import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

/* CREATE – Add Contact */
export const addContact = async (contactData) => {
  const response = await API.post("/contacts", contactData);
  return response.data;
};

/* READ – Get all contacts */
export const getAllContacts = async () => {
  const response = await API.get("/contacts");
  return response.data;
};

/* SEARCH – Frontend filtering */
export const searchContacts = (query = "", contacts = []) => {
  if (!query) return contacts;

  const lowerQuery = query.toLowerCase();

  return contacts.filter((c) =>
    c.firstName.toLowerCase().includes(lowerQuery) ||
    c.lastName.toLowerCase().includes(lowerQuery) ||
    c.email.toLowerCase().includes(lowerQuery) ||
    c.phone.includes(query) ||
    c.company?.toLowerCase().includes(lowerQuery) ||
    c.tag?.toLowerCase().includes(lowerQuery)
  );
};

/* UPDATE – Edit contact */
export const updateContact = async (id, updatedData) => {
  const response = await API.put(`/contacts/${id}`, updatedData);
  return response.data;
};
/* DELETE – Remove contact */
export const deleteContactById = async (id) => {
  const response = await API.delete(`/contacts/${id}`);
  return response.data;
};

