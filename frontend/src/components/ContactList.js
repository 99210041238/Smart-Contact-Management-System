import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onEdit }) {
  if (!contacts || contacts.length === 0) {
    return (
      <p className="mt-6 text-center text-slate-500">
        No contacts found
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4 max-w-3xl mx-auto">
      {contacts.map((contact) => (
        <ContactCard
          key={contact._id}
          contact={contact}
          onClick={onEdit}
        />
      ))}
    </div>
  );
}
