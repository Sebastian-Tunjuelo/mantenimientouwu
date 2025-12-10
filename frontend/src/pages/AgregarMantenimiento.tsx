import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { mantenimientosAPI } from "../api/apiService";
import Navbar from "../components/Navbar";

function AgregarMantenimiento() {
  const navigate = useNavigate();
  const location = useLocation();
  const productoUsuarioId = location.state?.id;

  const [tipoMantenimiento, setTipoMantenimiento] = useState("");
  const [fechaMantenimiento, setFechaMantenimiento] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [loading, setLoading] = useState(false);

  const agregar = async () => {
    try {
      if (!tipoMantenimiento || !fechaMantenimiento) {
        alert("Por favor completa los campos obligatorios");
        return;
      }

      setLoading(true);

      // Convertir la fecha a OffsetDateTime (ISO 8601 format)
      const fechaISO = new Date(fechaMantenimiento).toISOString();

      const mantenimiento = {
        productoUsuario: { id: productoUsuarioId },
        tipoMantenimiento,
        fechaMantenimiento: fechaISO,
        observaciones: observaciones || null,
      };

      console.log("Enviando mantenimiento:", mantenimiento);

      await mantenimientosAPI.create(mantenimiento);
      alert("Mantenimiento agregado exitosamente");
      navigate("/myproducts");
    } catch (error) {
      console.error("Error al agregar mantenimiento:", error);
      alert("Error al agregar el mantenimiento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Agregar Mantenimiento</h1>
      <form className="form">
        <label htmlFor="tipoMantenimiento">Tipo de Mantenimiento *</label>
        <select
          id="tipoMantenimiento"
          value={tipoMantenimiento}
          onChange={(e) => setTipoMantenimiento(e.target.value)}
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="Preventivo">Preventivo</option>
          <option value="Correctivo">Correctivo</option>
          <option value="Predictivo">Predictivo</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Revisión">Revisión</option>
        </select>

        <label htmlFor="fechaMantenimiento">Fecha de Mantenimiento *</label>
        <input
          type="datetime-local"
          id="fechaMantenimiento"
          value={fechaMantenimiento}
          onChange={(e) => setFechaMantenimiento(e.target.value)}
          required
        />

        <label htmlFor="observaciones">Observaciones</label>
        <textarea
          id="observaciones"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          rows={4}
          placeholder="Describe los detalles del mantenimiento realizado..."
        />

        <button type="button" onClick={agregar} disabled={loading}>
          {loading ? "Guardando..." : "Agregar Mantenimiento"}
        </button>

        <button type="button" onClick={() => navigate(-1)} disabled={loading}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default AgregarMantenimiento;
