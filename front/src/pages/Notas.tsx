import { useEffect, useState } from "react";

function Notas() {
  const [notas, setNotas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Para editar notas
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    fetchNotas();
  }, []);

  const fetchNotas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/notas");
      const data = await response.json();
      setNotas(data);
    } catch (error) {
      console.error("Error al obtener notas");
    }
  };

  const crearNota = async () => {
    if (!titulo || !descripcion) return alert("Completa todos los campos");

    try {
      //editando
      if (editandoId) {
        await fetch(`http://localhost:8080/api/notas/${editandoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ titulo, descripcion }),
        });
        setEditandoId(null);
      } else {
        //nuevo
        await fetch("http://localhost:8080/api/notas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ titulo, descripcion }),
        });
      }

      setTitulo("");
      setDescripcion("");
      fetchNotas();
    } catch (error) {
      console.error("Error al guardar o editar nota");
    }
  };

  const eliminarNota = async (id: any) => {
    try {
      await fetch(`http://localhost:8080/api/notas/${id}`, {
        method: "DELETE",
      });
      fetchNotas();
    } catch (error) {
      console.log("Error al eliminar nota");
    }
  };

  const editarNota = (nota: any) => {
    setTitulo(nota.titulo);
    setDescripcion(nota.descripcion);
    setEditandoId(nota.id);
  };

  return (
    <>
      <h1>App de notas</h1>
      <p className="read-the-docs">
        Una aplicación simple para ver, crear, editar y eliminar notas usando
        React y una API con Spring Boot.
      </p>
      <div className="form">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button onClick={crearNota}>
          {editandoId ? "Actualizar nota" : "Crear nota"}
        </button>
      </div>
      <div className="notas">
        {notas.map((nota: any) => (
          <div className="nota" key={nota.id}>
            <h3>{nota.titulo}</h3>
            <p>{nota.descripcion}</p>
            <button onClick={() => editarNota(nota)}>Editar</button>
            <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notas;
