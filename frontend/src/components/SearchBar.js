import { useState } from "react";

/* Top IT / MNC Companies */
const companies = [
  "Accenture",
  "Amazon",
  "Apple",
  "Capgemini",
  "Cognizant",
  "Deloitte",
  "Facebook (Meta)",
  "Google",
  "HCL",
  "IBM",
  "Infosys",
  "LTIMindtree",
  "Microsoft",
  "Oracle",
  "SAP",
  "TCS",
  "Tech Mahindra",
  "Wipro",
  "Zoho"
];

/* IT Roles: Trainee → CEO */
const roles = [
  "Trainee",
  "Intern",
  "Junior Developer",
  "Associate Software Engineer",
  "Software Engineer",
  "Senior Software Engineer",
  "Tech Lead",
  "Team Lead",
  "Project Manager",
  "Product Manager",
  "Engineering Manager",
  "Solution Architect",
  "System Architect",
  "Principal Engineer",
  "Director of Engineering",
  "Vice President (VP)",
  "Chief Technology Officer (CTO)",
  "Chief Executive Officer (CEO)"
];

export default function SearchBar({
  value,
  onChange,
  selectedCompany,
  setSelectedCompany,
  selectedTag,
  setSelectedTag
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* SEARCH INPUT */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, email, phone..."
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300
                     focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-3 rounded-xl border border-slate-300
                     text-slate-700 font-medium hover:bg-slate-100
                     transition"
        >
          Filters
        </button>
      </div>

      {/* FILTER PANEL */}
      {showFilters && (
        <div className="mt-4 bg-white border border-slate-200 rounded-xl
                        shadow-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* COMPANY FILTER */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Company
            </label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">All Companies</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          {/* TAG / ROLE FILTER */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Role / Tag
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">All Roles</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
