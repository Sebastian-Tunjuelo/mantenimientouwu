import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
function agregarProducto() {
  const navigate = useNavigate();
  const session = useAuth();
  const locations = useLocation();
  const id = locations.state.id;
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [DateMantenimiento, setDateMantenimiento] = React.useState("");
  const agregar = async () => {
    let user_id = session?.user.id;
    await fetch("http://localhost:8080/api/agregar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, user_id, name, date, DateMantenimiento }),
    });
    navigate("/myproducts");
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="date">Fecha de compra</label>
        <input
          type="date"
          name="date_shop"
          id="date_shop"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="date">Ultimo mantenimiento</label>
        <input
          type="date"
          name="date_last"
          id="date_last"
          value={DateMantenimiento}
          onChange={(e) => setDateMantenimiento(e.target.value)}
        />
        <button type="button" onClick={() => agregar()}>
          agregar
        </button>
      </form>
    </div>
  );
}

export default agregarProducto;
