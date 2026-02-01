import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddContact from "./pages/AddContact";
import ReadContact from "./pages/ReadContact";
import EditContact from "./pages/EditContact";
import DeleteContact from "./pages/DeleteContact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/read" element={<ReadContact />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/delete" element={<DeleteContact />} />
      </Routes>
    </BrowserRouter>
  );
}
