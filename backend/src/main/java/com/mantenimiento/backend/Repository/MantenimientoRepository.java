package com.mantenimiento.backend.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.Mantenimiento;

@Repository
public interface MantenimientoRepository extends JpaRepository <Mantenimiento, UUID> {
    
}
