package com.mantenimiento.backend.model;

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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "productos_propuestos")
public class ProductosPropuestos {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_producto_propuesto")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @Column(name = "tipo_dispositivo")
    private String tipoDispositivo;

    @Column(name = "marca")
    private String marca;

    @Column(name = "modelo")
    private String modelo;

    @Column(name = "imagen_url")
    private String imagenUrl;

    @Column(name = "detalle")
    private String detalle;

    @Column(name = "gasto_energia")
    private Double gastoEnergia;

    @Column(name = "vida_util")
    private Integer vidaUtil;

    @Column(name = "estado_propuesta")
    private boolean estadoPropuesta;

    @Column(name = "motivo_rechazo")
    private String motivoRechazo;

}
