import Navbar from "../components/Navbar";
import { supabase } from "../integrations/supabase";
import { KEY_STORAGE } from "../const/constants";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    //esto es para remover la sesion del navegador
    localStorage.removeItem(KEY_STORAGE);
    navigate("/auth");
  };
  useEffect(() => {
    console.log(); // Debug
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <button type="button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
        <h1></h1>
        <p>informacion sobre mantenimiento</p>
      </div>
    </div>
  );
}

export default Home;
