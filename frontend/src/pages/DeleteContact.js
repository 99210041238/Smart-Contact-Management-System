import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ContactList from "../components/ContactList";
import {
  getAllContacts,
  searchContacts,
  deleteContactById
} from "../services/contactService";

export default function DeleteContact() {
  // 🔹 SEARCH STATES
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // 🔹 DATA STATES
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  // 🔹 FETCH CONTACTS
  useEffect(() => {
    getAllContacts().then(setContacts);
  }, []);

  // 🔹 SEARCH + FILTER
  const searchedResults = searchContacts(query, contacts);
  const results = searchedResults.filter((c) => {
    return (
      (!selectedCompany || c.company === selectedCompany) &&
      (!selectedTag || c.tag === selectedTag)
    );
  });

  // 🔹 DELETE HANDLER
  const handleDelete = async () => {
    try {
      await deleteContactById(selected._id);
      alert("Contact deleted successfully 🗑️");

      // remove from UI
      setContacts((prev) =>
        prev.filter((c) => c._id !== selected._id)
      );

      setSelected(null);
    } catch (error) {
      alert("Delete failed ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-10">

      {/* 🔍 SEARCH */}
      <SearchBar
        value={query}
        onChange={setQuery}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {query.trim() === "" && (
        <p className="mt-6 text-center text-slate-500">
          Start typing to search contacts
        </p>
      )}

      {query.trim() !== "" && (
        <ContactList
          contacts={results}
          onEdit={(contact) => setSelected(contact)}
        />
      )}

      {/* 🗑️ DELETE CONFIRMATION */}
      {selected && (
        <div className="mt-10 bg-red-50 dark:bg-red-900/20
                        border border-red-200 dark:border-red-700
                        p-6 rounded-2xl max-w-xl shadow-lg">
          <h3 className="text-xl font-bold text-red-600 mb-4">
            Confirm Delete
          </h3>

          <p className="text-slate-700 dark:text-slate-200">
            Are you sure you want to delete{" "}
            <b>{selected.firstName} {selected.lastName}</b>?
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleDelete}
              className="px-6 py-2 rounded-lg bg-red-500
                         text-white font-semibold hover:bg-red-600
                         transition"
            >
              Delete
            </button>

            <button
              onClick={() => setSelected(null)}
              className="px-6 py-2 rounded-lg border
                         border-slate-300 text-slate-700
                         hover:bg-slate-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
