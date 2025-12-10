import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { productosAPI } from "../api/apiService";
import Navbar from "../components/Navbar";

function Catalog() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const data = await productosAPI.getAll();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener Productos:", error);
      alert("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  const verMas = (id: string) => {
    navigate("/product", { state: { id } });
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="action-bar">
          <h2 className="action-bar-title">Catálogo de Productos</h2>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Cargando productos...</p>
          </div>
        ) : productos.length === 0 ? (
          <div className="empty-state">
            <svg
              className="empty-state-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <h3>No hay productos disponibles</h3>
            <p>El catálogo está vacío en este momento</p>
          </div>
        ) : (
          <div className="grid-container">
            {productos.map((producto: any) => (
              <div className="product-card" key={producto.id}>
                <div className="card-image-container">
                  {producto.imagenUrl && (
                    <img
                      className="card-image"
                      src={producto.imagenUrl}
                      alt={producto.modelo}
                    />
                  )}
                  <div className="card-badge">{producto.tipoDispositivo}</div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{producto.modelo}</h3>
                  <p className="card-subtitle">{producto.marca}</p>
                  <p className="card-description">{producto.detalle}</p>

                  <div className="card-specs">
                    {producto.gastoEnergia && (
                      <span className="card-spec">
                        {producto.gastoEnergia}W
                      </span>
                    )}
                    {producto.vidaUtil && (
                      <span className="card-spec">
                        {producto.vidaUtil} años
                      </span>
                    )}
                  </div>
                </div>

                <div className="card-actions">
                  <button onClick={() => verMas(producto.id)}>
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
