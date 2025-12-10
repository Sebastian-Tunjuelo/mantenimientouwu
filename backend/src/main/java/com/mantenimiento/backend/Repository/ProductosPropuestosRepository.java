package com.mantenimiento.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.ProductosPropuestos;

@Repository
public interface ProductosPropuestosRepository extends JpaRepository <ProductosPropuestos, Long> {
    
}
