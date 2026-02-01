export default function ContactCard({ contact, onClick }) {
  return (
    <div
      onClick={() => onClick(contact)}
      className="p-4 bg-white dark:bg-slate-800
                 border border-slate-200 dark:border-slate-700
                 rounded-xl shadow-sm hover:shadow-md
                 cursor-pointer transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white">
            {contact.firstName} {contact.lastName}
          </h4>

          <p className="text-sm text-slate-500">
            {contact.tag} • {contact.company}
          </p>
        </div>

        <div className="text-sm text-slate-400">
          {contact.phone}
        </div>
      </div>
    </div>
  );
}
