export default function ContactForm({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow"
    >
      {children}
    </form>
  );
}
