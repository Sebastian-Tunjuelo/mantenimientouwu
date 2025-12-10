import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usuariosAPI } from "../api/apiService";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import "./MyProfile.css";

function MyProfile() {
  const navigate = useNavigate();
  const session = useAuth();
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);

  // Formulario de edición
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session?.user?.id) {
      fetchUsuario();
    }
  }, []);

  const fetchUsuario = async () => {
    try {
      setLoading(true);
      const data = await usuariosAPI.getById(session?.user?.id);
      setUsuario(data);
      // Inicializar campos del formulario
      setNombre(data.nombre || "");
      setApellido(data.apellido || "");
      setTelefono(data.telefono || "");
      setEmail(data.email || "");
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      alert("Error al cargar tu perfil");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (!nombre.trim() || !apellido.trim()) {
        alert("Por favor completa nombre y apellido");
        return;
      }

      setSaving(true);
      const updatedUser = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        telefono: telefono.trim(),
        email: email.trim(),
        contraseña: usuario.contraseña, // Mantener la contraseña actual
      };

      await usuariosAPI.update(session?.user?.id, updatedUser);
      alert("Perfil actualizado exitosamente");
      setEditMode(false);
      fetchUsuario();
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert("Error al actualizar el perfil");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    // Restaurar valores originales
    setNombre(usuario.nombre || "");
    setApellido(usuario.apellido || "");
    setTelefono(usuario.telefono || "");
    setEmail(usuario.email || "");
    setEditMode(false);
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="profile-container">
          {/* Header del perfil */}
          <div className="profile-header">
            <div className="profile-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </div>
            <div className="profile-header-info">
              <h1 className="profile-name">
                {usuario?.nombre && usuario?.apellido
                  ? `${usuario.nombre} ${usuario.apellido}`
                  : "Usuario Sin Nombre"}
              </h1>
              <p className="profile-email">{usuario?.email}</p>
            </div>
            {!editMode && (
              <button
                className="profile-edit-btn"
                onClick={() => setEditMode(true)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Editar Perfil
              </button>
            )}
          </div>

          {/* Contenido del perfil */}
          <div className="profile-content">
            {/* Información Personal */}
            <div className="profile-section">
              <div className="profile-section-header">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h2>Información Personal</h2>
              </div>

              {editMode ? (
                <div className="profile-form">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre *</label>
                    <input
                      type="text"
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ingresa tu nombre"
                      disabled={saving}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="apellido">Apellido *</label>
                    <input
                      type="text"
                      id="apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      placeholder="Ingresa tu apellido"
                      disabled={saving}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      disabled
                      className="input-disabled"
                    />
                    <small className="form-hint">
                      El email no se puede modificar
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Ingresa tu teléfono"
                      disabled={saving}
                    />
                  </div>

                  <div className="profile-form-actions">
                    <button
                      className="btn-primary"
                      onClick={handleSave}
                      disabled={saving}
                    >
                      {saving ? "Guardando..." : "Guardar Cambios"}
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={handleCancel}
                      disabled={saving}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="profile-info-grid">
                  <div className="profile-info-item">
                    <span className="profile-info-label">Nombre</span>
                    <span className="profile-info-value">
                      {usuario?.nombre || "No especificado"}
                    </span>
                  </div>

                  <div className="profile-info-item">
                    <span className="profile-info-label">Apellido</span>
                    <span className="profile-info-value">
                      {usuario?.apellido || "No especificado"}
                    </span>
                  </div>

                  <div className="profile-info-item">
                    <span className="profile-info-label">Email</span>
                    <span className="profile-info-value">
                      {usuario?.email || "No especificado"}
                    </span>
                  </div>

                  <div className="profile-info-item">
                    <span className="profile-info-label">Teléfono</span>
                    <span className="profile-info-value">
                      {usuario?.telefono || "No especificado"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Acciones rápidas */}
            <div className="profile-section">
              <div className="profile-section-header">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3" />
                </svg>
                <h2>Acciones Rápidas</h2>
              </div>

              <div className="profile-actions">
                <button
                  className="profile-action-card"
                  onClick={() => navigate("/catalog")}
                >
                  <div className="profile-action-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <span>Ver Catálogo</span>
                </button>

                <button
                  className="profile-action-card"
                  onClick={() => navigate("/myproducts")}
                >
                  <div className="profile-action-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span>Mis Productos</span>
                </button>

                <button
                  className="profile-action-card"
                  onClick={() => navigate("/home")}
                >
                  <div className="profile-action-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <span>Ir a Inicio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
