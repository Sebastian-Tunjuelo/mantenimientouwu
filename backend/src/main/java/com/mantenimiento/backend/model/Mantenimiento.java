package com.mantenimiento.backend.model;

import java.time.OffsetDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_mantenimiento")
    private UUID id;

    @ManyToOne
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

    protected void onCreate() {
        this.createAt = OffsetDateTime.now();
    }

}
