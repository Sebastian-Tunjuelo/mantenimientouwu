package com.mantenimiento.backend.model;

import java.time.LocalDate;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "producto_usuario")
public class ProductoUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto_usuario")
    private Long id;
    
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @JoinColumn(name = "id_producto")
    private Producto producto;

    @Column(name = "numero_serie")
    private String numeroSerie;
    
    @PastOrPresent(message = "La fecha de compra no puede ser futura")
    @Column(name = "fecha_compra")
    private LocalDate fechaCompra;

    @PastOrPresent(message = "La fecha de ultimo mantenimiento no puede ser futura")
    @Column(name = "fecha_ultimo_mantenimiento")
    private LocalDate fechaUltimoMantenimiento;

    @Column(name = "Create_At", columnDefinition = "TIMESTAMPTZ")
    private java.time.OffsetDateTime createAt;
    
}
