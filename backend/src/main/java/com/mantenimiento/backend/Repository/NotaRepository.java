package com.mantenimiento.backend.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mantenimiento.backend.model.Nota;

@Repository
public interface NotaRepository extends JpaRepository <Nota, UUID> {
    
}
