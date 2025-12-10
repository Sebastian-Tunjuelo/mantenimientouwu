import React from "react";
import { useNavigate } from "react-router";
import { supabase } from "../integrations/supabase";

const Registre = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setTimeout(() => navigate("/home"), 1000);
  };
  return (
    <div>
      <div>
        <button type="button" onClick={() => navigate("/auth")}>
          Volver
        </button>
        <h1>Registre</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Registre</button>
      </form>
    </div>
  );
};
export default Registre;
