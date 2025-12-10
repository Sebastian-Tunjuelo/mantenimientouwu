package com.mantenimiento.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.ProductoUsuario;

@Repository
public interface ProductoUsuarioRepository extends JpaRepository <ProductoUsuario, Long> {
    
}
