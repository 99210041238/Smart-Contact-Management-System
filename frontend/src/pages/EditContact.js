import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ContactList from "../components/ContactList";
import {
  getAllContacts,
  searchContacts,
  updateContact
} from "../services/contactService";

export default function EditContact() {
  // 🔹 SEARCH STATES
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // 🔹 DATA STATES
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 FETCH CONTACTS
  useEffect(() => {
    getAllContacts().then(setContacts);
  }, []);

  // 🔹 SEARCH LOGIC
  const searchedResults = searchContacts(query, contacts);
  const results = searchedResults.filter((c) => {
    return (
      (!selectedCompany || c.company === selectedCompany) &&
      (!selectedTag || c.tag === selectedTag)
    );
  });

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  // 🔹 UPDATE HANDLER
  const handleUpdate = async () => {
    try {
      const updated = await updateContact(selected._id, selected);
      alert("Contact updated successfully ✅");

      // update local list
      setContacts((prev) =>
        prev.map((c) => (c._id === updated._id ? updated : c))
      );

      setIsEditing(false);
    } catch (error) {
      alert("Update failed ❌");
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
          onEdit={(contact) => {
            setSelected(contact);
            setIsEditing(false);
          }}
        />
      )}

      {/* 📄 DETAILS / EDIT FORM */}
      {selected && (
        <div className="mt-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg max-w-3xl">
          <h3 className="text-xl font-bold text-yellow-500 mb-6">
            {isEditing ? "Edit Contact" : "Contact Details"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName", "email", "phone", "company", "tag"].map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  value={selected[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`input ${
                    !isEditing ? "bg-slate-100 cursor-not-allowed" : ""
                  }`}
                  placeholder={field}
                />
              )
            )}
          </div>

          <div className="flex gap-4 mt-6">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="feature-btn bg-yellow-500 hover:bg-yellow-600"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleUpdate}
                className="feature-btn bg-green-500 hover:bg-green-600"
              >
                Update Contact
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
