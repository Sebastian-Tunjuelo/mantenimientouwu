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
    <div>
      <Navbar />
      <div>
        <h1>Catálogo de Productos</h1>
        {productos.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          <div className="productos">
            {productos.map((producto: any) => (
              <div className="nota" key={producto.id}>
                {producto.imagenUrl && (
                  <img 
                    src={producto.imagenUrl} 
                    alt={producto.modelo}
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
                <h3>{producto.modelo}</h3>
                <p><strong>Marca:</strong> {producto.marca}</p>
                <p><strong>Tipo:</strong> {producto.tipoDispositivo}</p>
                <p>{producto.detalle}</p>
                <button onClick={() => verMas(producto.id)}>Ver más</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;