import { useState } from "react";
import { addContact } from "../services/contactService";

// Minimal country list (ALL major ones, scalable)
const countryCodes = [
  { code: "+91", label: "India 🇮🇳" },
  { code: "+1", label: "USA 🇺🇸" },
  { code: "+44", label: "UK 🇬🇧" },
  { code: "+61", label: "Australia 🇦🇺" },
  { code: "+81", label: "Japan 🇯🇵" },
  { code: "+49", label: "Germany 🇩🇪" },
  { code: "+33", label: "France 🇫🇷" },
  { code: "+86", label: "China 🇨🇳" },
  { code: "+971", label: "UAE 🇦🇪" },
  { code: "+7", label: "Russia 🇷🇺" }
];

export default function AddContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    company: "",
    tag: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone =
        "Phone number must be exactly 10 digits and start with 6–9";
    }

   const emailPattern = /@ltimindtree\.com$/i;

if (!emailPattern.test(form.email)) {
  newErrors.email = "Email must end with @LTIMindtree.com";
}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const savedContact = await addContact(form);

    alert("Contact added successfully 🎉");
    console.log("Saved in DB ✅", savedContact);

    // Optional: reset form after save
    setForm({
      firstName: "",
      lastName: "",
      countryCode: "+91",
      phone: "",
      email: "",
      company: "",
      tag: ""
    });

    setErrors({});
  } catch (error) {
    console.error("Save failed ❌", error);
    alert("Failed to save contact");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200
                    dark:from-slate-900 dark:to-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white dark:bg-slate-800
                   border border-slate-200 dark:border-slate-700
                   rounded-2xl p-10 shadow-2xl"
      >
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-sky-500">
            Add New Contact
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Enter contact details carefully
          </p>
        </div>

        {/* BASIC INFO */}
        <section className="mb-10">
          <h3 className="section-title">Basic Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="label">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label className="label">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="mb-10">
          <h3 className="section-title">Contact Information</h3>

          <div className="mt-4">
            <label className="label">Phone Number</label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="input"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label} ({c.code})
                  </option>
                ))}
              </select>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                className="input md:col-span-3"
                placeholder="10-digit mobile number"
              />
            </div>

            {errors.phone && (
              <p className="error-text">{errors.phone}</p>
            )}
          </div>

          <div className="mt-6">
            <label className="label">Official Email ID</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="lastname.XXXXXX@LTIMindtree.com"
              className="input w-full"
            />

            {errors.email && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>
        </section>

        {/* ORGANIZATION INFO */}
        <section className="mb-12">
          <h3 className="section-title">Organization Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="label">Company Name</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. LTIMindtree, Infosys, Google"
                className="input"
              />
            </div>

            <div>
              <label className="label">Role / Tag</label>
              <input
                name="tag"
                value={form.tag}
                onChange={handleChange}
                placeholder="e.g. Trainee, Jr Dev, Manager"
                className="input"
              />
            </div>
          </div>
        </section>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-sky-500 text-white
                     font-semibold text-lg hover:bg-sky-600
                     transition-all shadow-lg"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}
