package com.mantenimiento.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Long> {
    
}
