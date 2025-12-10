package com.mantenimiento.backend.Controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mantenimiento.backend.Repository.UsuarioRepository;
import com.mantenimiento.backend.model.Usuario;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {
    
    @Autowired 
    UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> listaUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // CAMBIADO: Usar @PutMapping en lugar de @PostMapping para editar
    @PutMapping("/{id}")
    public Usuario editarUsuario(@PathVariable UUID id, @RequestBody Usuario usuarioDetalles) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        
        if (optionalUsuario.isPresent()) {
            Usuario usuario = optionalUsuario.get();
            usuario.setNombre(usuarioDetalles.getNombre());
            usuario.setApellido(usuarioDetalles.getApellido());
            usuario.setEmail(usuarioDetalles.getEmail());
            usuario.setContraseña(usuarioDetalles.getContraseña());
            usuario.setTelefono(usuarioDetalles.getTelefono());
            return usuarioRepository.save(usuario);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void eliminarUsuario(@PathVariable UUID id) {
        usuarioRepository.deleteById(id);
    }
}