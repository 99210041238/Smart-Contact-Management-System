import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-slate-50 dark:bg-slate-900 px-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
        Contact Management Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        <button
          className="feature-btn"
          onClick={() => navigate("/add")}
        >
          Add Contact
        </button>

        <button
          className="feature-btn"
          onClick={() => navigate("/read")}
        >
          Search Contact
        </button>

        <button
          className="feature-btn"
          onClick={() => navigate("/edit")}
        >
          Edit Contact
        </button>

        <button
          className="feature-btn"
          onClick={() => navigate("/delete")}
        >
          Delete Contact
        </button>
      </div>
    </div>
  );
}
