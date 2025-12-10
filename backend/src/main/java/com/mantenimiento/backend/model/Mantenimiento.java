package com.mantenimiento.backend.model;

import java.time.OffsetDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "mantenimientos")
public class Mantenimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mantenimiento")
    private Long id;

    @JoinColumn(name = "id_producto_usuario")
    private ProductoUsuario productoUsuario;    

    @Column(name = "tipo_mantenimiento")
    private String tipoMantenimiento;

    @Column(name = "fecha_mantenimiento")
    private OffsetDateTime fechaMantenimiento;

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "Create_At", columnDefinition = "TIMESTAMPTZ")
    private OffsetDateTime createAt;
    
}
