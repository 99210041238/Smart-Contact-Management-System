export default function StartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-10 px-12 py-4 rounded-2xl bg-sky-500 text-white
                 text-lg font-semibold hover:bg-sky-600
                 active:scale-95 transition-all shadow-lg"
    >
      Start
    </button>
  );
}
