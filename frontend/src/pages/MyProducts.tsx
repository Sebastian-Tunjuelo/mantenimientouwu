import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function MyProducts() {
  const navigate = useNavigate();
  const [misProductos, setMisProductos] = useState([]);
  useEffect(() => {
    fetchMisProductos();
  }, []);

  const fetchMisProductos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/misproductos");
      const data = await response.json();
      setMisProductos(data);
    } catch (error) {
      console.error("Error al obtener Productos");
    }
  };
  const agregarMantenimiento = (id: string) => {
    navigate("/agregarmantenimiento", { state: { id } });
  };

  return (
    <div>
      <div>
        <h1>Filtro</h1>
      </div>
      <div>
        <h1>Productos</h1>
        <div className="misProductos">
          {misProductos.map((miProducto: any) => (
            <div className="nota" key={miProducto.id}>
              <p>{miProducto.modelo}</p>
              <p>{miProducto.marca}</p>
              <p>{miProducto.descripcion}</p>
              <p>{miProducto.imagen}</p>
              <button onClick={() => agregarMantenimiento(miProducto.id)}>
                Ver mas
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
