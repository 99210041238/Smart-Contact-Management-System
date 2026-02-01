export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
        Welcome to
      </h1>

      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-sky-500">
        Smart Contact Management System
      </h2>

      <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
        Easily add, search, edit and manage your contacts with a clean and
        modern interface.
      </p>
    </div>
  );
}
