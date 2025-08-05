package com.example.registro.DTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@JsonIgnoreProperties(ignoreUnknown = true) //
public class usuarioDTO {
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



}
