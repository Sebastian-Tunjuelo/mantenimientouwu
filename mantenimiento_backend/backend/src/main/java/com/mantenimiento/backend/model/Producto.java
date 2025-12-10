package com.mantenimiento.backend.model;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.vladmihalcea.hibernate.type.json.JsonType;

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
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @Column(name = "tipo_dispositivo")
    private String tipoDispositivo;

    @Column(name = "marca")
    private String marca;

    @Column(name = "modelo")
    private String modelo;

    //Objeto tipo JSONB para ficha tecnica
    @Type(JsonType.class)
    @Column(name = "ficha_tecnica", columnDefinition = "jsonb")
    private Map<String, Object> fichaTecnica;

    @Column(name = "detalle")
    private String detalle;

    @Column(name = "gasto_energia")
    private Double gastoEnergia;

    @Column(name = "vida_util")
    private Integer vidaUtil;

    @Column(name = "imagen_url")
    private String imagenUrl;

    @Column(name = "Create_At", columnDefinition = "TIMESTAMPTZ")
    private java.time.OffsetDateTime createAt;  
}
