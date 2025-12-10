// Servicio centralizado para manejar todas las llamadas a la API

const API_BASE_URL = "http://localhost:8081/api";

// Productos
export const productosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/productos`);
    if (!response.ok) throw new Error("Error al obtener productos");
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`);
    if (!response.ok) throw new Error("Error al obtener producto");
    return response.json();
  },

  create: async (producto: any) => {
    const response = await fetch(`${API_BASE_URL}/productos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    if (!response.ok) throw new Error("Error al crear producto");
    return response.json();
  },

  update: async (id: string, producto: any) => {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    if (!response.ok) throw new Error("Error al actualizar producto");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar producto");
  },
};

// Producto Usuario
export const productoUsuarioAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario`);
    if (!response.ok) throw new Error("Error al obtener productos de usuario");
    return response.json();
  },

  create: async (productoUsuario: any) => {
    console.log(
      "Enviando producto usuario:",
      JSON.stringify(productoUsuario, null, 2)
    ); // Debug
    const response = await fetch(`${API_BASE_URL}/producto-usuario`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoUsuario),
    });

    console.log("Response status:", response.status); // Debug

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Error al crear producto de usuario: ${errorText}`);
    }

    const result = await response.json();
    console.log("Producto creado:", result); // Debug
    return result;
  },

  update: async (id: string, productoUsuario: any) => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoUsuario),
    });
    if (!response.ok)
      throw new Error("Error al actualizar producto de usuario");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar producto de usuario");
  },
};

// Mantenimientos
export const mantenimientosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos`);
    if (!response.ok) throw new Error("Error al obtener mantenimientos");
    return response.json();
  },

  create: async (mantenimiento: any) => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mantenimiento),
    });
    if (!response.ok) throw new Error("Error al crear mantenimiento");
    return response.json();
  },

  update: async (id: string, mantenimiento: any) => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mantenimiento),
    });
    if (!response.ok) throw new Error("Error al actualizar mantenimiento");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar mantenimiento");
  },
};

// Usuarios
export const usuariosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/usuarios`);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);
    if (!response.ok) throw new Error("Error al obtener usuario");
    return response.json();
  },

  create: async (usuario: any) => {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error al crear usuario:", errorText);
      throw new Error("Error al crear usuario");
    }
    return response.json();
  },

  update: async (id: string, usuario: any) => {
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error al actualizar usuario");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar usuario");
  },
};

// Notas
export const notasAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/notes`);
    if (!response.ok) throw new Error("Error al obtener notas");
    return response.json();
  },

  create: async (nota: any) => {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nota),
    });
    if (!response.ok) throw new Error("Error al crear nota");
    return response.json();
  },

  update: async (id: string, nota: any) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nota),
    });
    if (!response.ok) throw new Error("Error al actualizar nota");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar nota");
  },
};
