package com.example.registro.Entidades;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Table(name="Usuarios")
@Data @NoArgsConstructor @AllArgsConstructor @Builder @Entity
public class Usuario {

    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Id
    private Long idUsuario;
    @NotBlank(message = "Nombre de usuario no puede estar vacio")
    private String nombreUsuario;

    @NotBlank(message = "Numero de telefono no puede estar vacio")
    private String numeroTelefono;

    @NotBlank(message = "El sector insdustrial del usuario no puede ser vacio")
    private String sectorIndustrial;

    @NotBlank(message = "El puesto del usuario no puede estar vacio")
    private String cargoUsuario;

    @NotBlank(message = "El correo de usuario no puede estar vacio")
    private String correoUsuario;

    @NotBlank(message = "El lugar de estancia del usuario no puede ser vacio")
    private String lugarUsuario;

    @NotBlank(message = "Nombre empresa no puede ser vacio")
    private String nombreEmpresa;

    private String codigoDescuento;

    private LocalDateTime expiracionCodigo;

}
