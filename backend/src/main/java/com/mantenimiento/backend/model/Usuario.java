package com.mantenimiento.backend.model;

import java.time.OffsetDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_usuario")
    private UUID id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Email
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "contraseña")
    private String contraseña;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "Create_At", columnDefinition = "TIMESTAMPTZ")
    private OffsetDateTime createAt;

    protected void onCreate() {
        this.createAt = OffsetDateTime.now();
    }

}
// >>>>>>> 2660c50 (Creación de Las Entidades)
