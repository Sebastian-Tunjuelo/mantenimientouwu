import React from "react";
import { useLocation } from "react-router";

function AgregarMantenimiento() {
  const locations = useLocation();
  const id = locations.state.id;
  const [tipo, settipo] = React.useState("");
  const [date, setDate] = React.useState("");
  const [Observaciones, setObservaciones] = React.useState("");
  const [realizadoPor, setRealizadoPor] = React.useState("");
  const agregar = async () => {
    await fetch("http://localhost:8081/api/agregarmantenimiento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, tipo, date, Observaciones, realizadoPor }),
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="tipo">tipo</label>
        <input
          type="text"
          name="tipo"
          id="tipo"
          value={tipo}
          onChange={(e) => settipo(e.target.value)}
        />
        <label htmlFor="date">Fecha de realizacion</label>
        <input
          type="date"
          name="date_mantenimiento"
          id="date_mantenimiento"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="date">Observaciones</label>
        <input
          type="text"
          name="Observaciones"
          id="Observaciones"
          value={Observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
        <label htmlFor="date">Realizado por</label>
        <input
          type="text"
          name="realizadoPor"
          id="realizadoPor"
          value={realizadoPor}
          onChange={(e) => setRealizadoPor(e.target.value)}
        />
        <button type="button" onClick={() => agregar()}>
          agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarMantenimiento;
