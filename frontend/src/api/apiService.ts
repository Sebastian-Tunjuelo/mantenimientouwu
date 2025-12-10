// Servicio centralizado para manejar todas las llamadas a la API

const API_BASE_URL = 'http://localhost:8081/api';

// Productos
export const productosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/productos`);
    return response.json();
  },
  
  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`);
    return response.json();
  },
  
  create: async (producto: any) => {
    const response = await fetch(`${API_BASE_URL}/productos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
    return response.json();
  },
  
  update: async (id: string, producto: any) => {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
    return response.json();
  },
  
  delete: async (id: string) => {
    await fetch(`${API_BASE_URL}/productos/${id}`, {
      method: 'DELETE'
    });
  }
};

// Producto Usuario
export const productoUsuarioAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario`);
    return response.json();
  },
  
  create: async (productoUsuario: any) => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productoUsuario)
    });
    return response.json();
  },
  
  update: async (id: string, productoUsuario: any) => {
    const response = await fetch(`${API_BASE_URL}/producto-usuario/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productoUsuario)
    });
    return response.json();
  },
  
  delete: async (id: string) => {
    await fetch(`${API_BASE_URL}/producto-usuario/${id}`, {
      method: 'DELETE'
    });
  }
};

// Mantenimientos
export const mantenimientosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos`);
    return response.json();
  },
  
  create: async (mantenimiento: any) => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mantenimiento)
    });
    return response.json();
  },
  
  update: async (id: string, mantenimiento: any) => {
    const response = await fetch(`${API_BASE_URL}/mantenimientos/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mantenimiento)
    });
    return response.json();
  },
  
  delete: async (id: string) => {
    await fetch(`${API_BASE_URL}/mantenimientos/${id}`, {
      method: 'DELETE'
    });
  }
};

// Notas
export const notasAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/notes`);
    return response.json();
  },
  
  create: async (nota: any) => {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nota)
    });
    return response.json();
  },
  
  update: async (id: string, nota: any) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nota)
    });
    return response.json();
  },
  
  delete: async (id: string) => {
    await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'DELETE'
    });
  }
};