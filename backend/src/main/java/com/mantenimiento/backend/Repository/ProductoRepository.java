package com.mantenimiento.backend.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository <Producto, UUID> {
    
}
