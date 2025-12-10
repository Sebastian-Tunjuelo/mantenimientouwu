import React from "react";
import { useLocation, useNavigate } from "react-router";
import { supabase } from "../integrations/supabase";

function Product() {
  const navigate = useNavigate();
  const locations = useLocation();
  const id = locations.state.id;
  const [producto, setProducto] = React.useState<any>([]);

  const obtenerProducto = async () => {
    try {
      const { data, error } = await supabase
        .from("productos")
        .select("*")
        .eq("id", id);
      if (error) throw error;
      setProducto(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const agregarProducto = async () => {
    navigate("/agregarproducto", { state: { id } });
  };

  React.useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <div>
      <div>
        <p>{producto.tipo_dispositivo}</p>
        <p>{producto.modelo}</p>
        <p>{producto.marca}</p>
        <p>{producto.imagen_url}</p>
        <p>{producto.modelo}</p>
        <p>{producto.detalles}</p>
        <p>{producto.ficha_tecnica}</p>
        <p>{producto.consumo_energetico}</p>
        <p>{producto.tiempo_vida_aprox}</p>
      </div>
      <div>
        <button onClick={() => agregarProducto()}>Agregar producto</button>
      </div>
    </div>
  );
}

export default Product;
