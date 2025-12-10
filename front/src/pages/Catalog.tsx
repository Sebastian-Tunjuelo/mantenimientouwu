import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function catalog() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/productos");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener Productos");
    }
  };

  const verMas = (id: string) => {
    navigate("/product", { state: { id } });
  };
  return (
    <div>
      <div>
        <h1>Filtro</h1>
      </div>
      <div>
        <h1>Productos</h1>
        <div className="productos">
          {productos.map((producto: any) => (
            <div className="nota" key={producto.id}>
              <p>{producto.modelo}</p>
              <p>{producto.marca}</p>
              <p>{producto.descripcion}</p>
              <p>{producto.imagen}</p>
              <button onClick={() => verMas(producto.id)}>Ver mas</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default catalog;
