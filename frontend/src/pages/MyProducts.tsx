import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { productoUsuarioAPI } from "../api/apiService"
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";

function MyProducts() {
  const navigate = useNavigate();
  const session = useAuth();
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMisProductos();
  }, []);

  const fetchMisProductos = async () => {
    try {
      setLoading(true);
      const data = await productoUsuarioAPI.getAll();
      
      // Filtrar solo los productos del usuario actual
      const misProductosFiltrados = data.filter(
        (item: any) => item.usuario?.id === session?.user.id
      );
      
      setMisProductos(misProductosFiltrados);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      alert("Error al cargar tus productos");
    } finally {
      setLoading(false);
    }
  };

  const verMantenimientos = (id: string) => {
    navigate("/agregarmantenimiento", { state: { id } });
  };

  const eliminarProducto = async (id: string) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await productoUsuarioAPI.delete(id);
        alert("Producto eliminado");
        fetchMisProductos();
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Error al eliminar el producto");
      }
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <p>Cargando tus productos...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Mis Productos</h1>
      
      {misProductos.length === 0 ? (
        <div>
          <p>No tienes productos registrados</p>
          <button onClick={() => navigate("/catalog")}>
            Ir al Catálogo
          </button>
        </div>
      ) : (
        <div className="productos">
          {misProductos.map((item: any) => (
            <div className="nota" key={item.id}>
              {item.producto?.imagenUrl && (
                <img 
                  src={item.producto.imagenUrl} 
                  alt={item.producto.modelo}
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <h3>{item.producto?.modelo || "Sin modelo"}</h3>
              <p><strong>Marca:</strong> {item.producto?.marca}</p>
              <p><strong>Serie:</strong> {item.numeroSerie}</p>
              <p><strong>Compra:</strong> {item.fechaCompra}</p>
              {item.fechaUltimoMantenimiento && (
                <p><strong>Último Mant.:</strong> {item.fechaUltimoMantenimiento}</p>
              )}
              
              <button onClick={() => verMantenimientos(item.id)}>
                Ver Mantenimientos
              </button>
              <button onClick={() => eliminarProducto(item.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProducts;