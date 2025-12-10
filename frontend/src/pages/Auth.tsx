import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../integrations/supabase";
import { usuariosAPI } from "../api/apiService";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const session = useAuth();
    if (session) navigate("/home");
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (email === "" || password === "") {
        alert("Por favor, completa todos los campos");
        setLoading(false);
        return;
      }

      // Iniciar sesión en Supabase
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) {
        alert(authError.message);
        setLoading(false);
        return;
      }

      // Verificar si el usuario existe en nuestra BD
      if (authData && authData.user) {
        try {
          await usuariosAPI.getById(authData.user.id);
          console.log("Usuario existe en BD");
        } catch (err) {
          // Si el usuario no existe en la BD, crearlo (solo id y email, el resto vacío)
          console.log("Usuario no existe en BD, creándolo...");
          try {
            const { error: insertError } = await supabase
              .from("usuarios")
              .insert({
                id_usuario: authData.user.id,
                email: authData.user.email ?? "",
                nombre: "",
                apellido: "",
                contraseña: password,
                telefono: "",
              });
            if (insertError) throw insertError;
            console.log("Usuario creado en BD");
          } catch (dbErr) {
            console.error("Error al crear usuario en BD:", dbErr);
          }
        }
      }

      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      alert((error as Error).message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Cargando...</p>}
      <div>
        <div>
          <p>Si no tienes cuenta </p>
          <button type="button" onClick={() => navigate("/register")}>
            REGISTRARSE
          </button>
        </div>
        <h1>Login</h1>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="button" onClick={handleSubmit} disabled={loading}>
          {loading ? "Iniciando sesión..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
