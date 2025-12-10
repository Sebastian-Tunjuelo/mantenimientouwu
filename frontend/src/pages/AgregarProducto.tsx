import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { productoUsuarioAPI } from "../api/apiService";
import Navbar from "../components/Navbar";

function AgregarProducto() {
  const navigate = useNavigate();
  const session = useAuth();
  const location = useLocation();
  const productoId = location.state?.id;

  const [numeroSerie, setNumeroSerie] = React.useState("");
  const [fechaCompra, setFechaCompra] = React.useState("");
  const [fechaUltimoMantenimiento, setFechaUltimoMantenimiento] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const agregar = async () => {
    try {
      if (!numeroSerie || !fechaCompra) {
        alert("Por favor completa todos los campos obligatorios");
        return;
      }

      setLoading(true);
      
      const productoUsuario = {
        producto: { id: productoId },
        usuario: { id: session?.user.id },
        numeroSerie,
        fechaCompra,
        fechaUltimoMantenimiento: fechaUltimoMantenimiento || null
      };

      await productoUsuarioAPI.create(productoUsuario);
      alert("Producto agregado exitosamente");
      navigate("/myproducts");
    } catch (error) {
      console.error("Error al agregar producto:", error);
      alert("Error al agregar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Agregar Producto a Mi Inventario</h1>
      <form className="form">
        <label htmlFor="numeroSerie">Número de Serie *</label>
        <input
          type="text"
          id="numeroSerie"
          value={numeroSerie}
          onChange={(e) => setNumeroSerie(e.target.value)}
          required
        />
        
        <label htmlFor="fechaCompra">Fecha de Compra *</label>
        <input
          type="date"
          id="fechaCompra"
          value={fechaCompra}
          onChange={(e) => setFechaCompra(e.target.value)}
          required
        />
        
        <label htmlFor="fechaUltimoMantenimiento">Último Mantenimiento</label>
        <input
          type="date"
          id="fechaUltimoMantenimiento"
          value={fechaUltimoMantenimiento}
          onChange={(e) => setFechaUltimoMantenimiento(e.target.value)}
        />
        
        <button 
          type="button" 
          onClick={agregar}
          disabled={loading}
        >
          {loading ? "Guardando..." : "Agregar a Mis Productos"}
        </button>
        
        <button 
          type="button" 
          onClick={() => navigate(-1)}
          disabled={loading}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default AgregarProducto;