import React from "react";
import { useLocation, useNavigate } from "react-router";
import { productosAPI } from "../api/apiService";
import Navbar from "../components/Navbar";

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  const [producto, setProducto] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  const obtenerProducto = async () => {
    try {
      setLoading(true);
      const data = await productosAPI.getById(id);
      setProducto(data);
    } catch (error) {
      console.error("Error al obtener producto:", error);
      alert("Error al cargar el producto");
    } finally {
      setLoading(false);
    }
  };

  const agregarProducto = () => {
    navigate("/agregarproducto", { state: { id } });
  };

  React.useEffect(() => {
    if (id) {
      obtenerProducto();
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (!producto) {
    return (
      <div>
        <Navbar />
        <p>Producto no encontrado</p>
        <button onClick={() => navigate("/catalog")}>Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        {producto.imagenUrl && (
          <img
            src={producto.imagenUrl}
            alt={producto.modelo}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        )}

        <h1>{producto.modelo}</h1>

        <div style={{ marginTop: "1rem" }}>
          <p>
            <strong>Tipo de Dispositivo:</strong> {producto.tipoDispositivo}
          </p>
          <p>
            <strong>Marca:</strong> {producto.marca}
          </p>
          <p>
            <strong>Detalle:</strong> {producto.detalle}
          </p>

          {producto.gastoEnergia && (
            <p>
              <strong>Consumo Energético:</strong> {producto.gastoEnergia} W
            </p>
          )}

          {producto.vidaUtil && (
            <p>
              <strong>Vida Útil Aproximada:</strong> {producto.vidaUtil} años
            </p>
          )}
        </div>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <button onClick={agregarProducto}>Agregar a Mis Productos</button>
          <button onClick={() => navigate("/catalog")}>
            Volver al Catálogo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
