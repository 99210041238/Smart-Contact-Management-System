import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ContactList from "../components/ContactList";
import {
  getAllContacts,
  searchContacts
} from "../services/contactService";

export default function ReadContact() {
  // 🔹 SEARCH STATES
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selected, setSelected] = useState(null);

  // 🔹 DATA STATE
  const [contacts, setContacts] = useState([]);

  // 🔹 FETCH CONTACTS FROM BACKEND
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getAllContacts();
        setContacts(data);
      } catch (error) {
        console.error("Failed to fetch contacts ❌", error);
      }
    };

    fetchContacts();
  }, []);

  // 🔹 SEARCH (Amazon-style partial match)
  const searchedResults = searchContacts(query, contacts);

  // 🔹 APPLY FILTERS (LinkedIn-style)
  const results = searchedResults.filter((c) => {
    return (
      (!selectedCompany || c.company === selectedCompany) &&
      (!selectedTag || c.tag === selectedTag)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-10">
      
      {/* 🔍 SEARCH + FILTER BAR */}
      <SearchBar
        value={query}
        onChange={setQuery}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {/* 🟡 HELP TEXT (WHEN EMPTY SEARCH) */}
      {query.trim() === "" && (
        <p className="mt-6 text-center text-slate-500">
          Start typing to search contacts
        </p>
      )}

      {/* 📋 SEARCH RESULTS – SHOW ONLY WHEN USER TYPES */}
      {query.trim() !== "" && (
        <ContactList
          contacts={results}
          onEdit={(contact) => setSelected(contact)}
        />
      )}

      {/* 📄 CONTACT DETAILS (READ MODE) */}
      {selected && (
        <div className="mt-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-sky-500 mb-4">
            Contact Details
          </h3>

          <div className="space-y-2 text-slate-700 dark:text-slate-200">
            <p>
              <b>Name:</b> {selected.firstName} {selected.lastName}
            </p>
            <p>
              <b>Email:</b> {selected.email}
            </p>
            <p>
              <b>Phone:</b> {selected.countryCode} {selected.phone}
            </p>
            <p>
              <b>Company:</b> {selected.company}
            </p>
            <p>
              <b>Tag:</b> {selected.tag}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
