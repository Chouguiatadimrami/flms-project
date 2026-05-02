import { useState } from "react";
import API from "../api";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", role: "student" });

  const handleRegister = async () => {
    await API.post("/auth/register", form);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input placeholder="password" onChange={e => setForm({...form, password: e.target.value})}/>
      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
