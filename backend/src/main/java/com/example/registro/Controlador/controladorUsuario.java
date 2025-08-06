package com.example.registro.Controlador;

import com.example.registro.DTO.usuarioDTO;
import com.example.registro.Entidades.Usuario;
import com.example.registro.Servicio.Usuario.servicioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "https://mi-proyecto-completo-n8se.vercel.app",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS },
        allowedHeaders = "*")
@RestController
@RequestMapping("api/usuario")
public class controladorUsuario {

    @Autowired
    servicioUsuario serviciousuario;

    public controladorUsuario(servicioUsuario serviciousuario){
        this.serviciousuario = serviciousuario;
    }

    @PostMapping("/public/registro")
    //Vamos a enviar los campos que estan en usuarioDTO
    public ResponseEntity<?> registro(@RequestBody usuarioDTO request, BindingResult bindingResult){
        try {
            if (bindingResult.hasErrors()){
                //Mapeo con FieldError a : "campo mensaje"
                List<String> errores = bindingResult.getFieldErrors()
                        .stream()
                        .map(fe-> fe.getField()+ ": "+ fe.getDefaultMessage())
                        .collect((Collectors.toList()));

                Map<String, Object> response = new HashMap<>();
                response.put("status", HttpStatus.BAD_REQUEST.value());
                response.put("Error", errores);
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(response);
            }

            // Llamada al servicio
            Usuario creado = serviciousuario.registroUsuario(request);
            // 1. Map<String, Object>: 	"Quiero una caja para guardar regalos con etiquetas de papel"
            //    - String: Tipo de la clave (ej: "id", "mensaje")
            //    - Object: Tipo del valor (puede ser cualquier tipo de dato)
            // 2. new HashMap<>(): 	Compras una caja de cartón real PARA GUARDAR COSAS
            Map<String, Object> response = new HashMap<>();
            response.put("id",creado.getIdUsuario());
            response.put("Mensaje:", "Registro Uusario");
            response.put("codigoDescuento", creado.getCodigoDescuento());
            response.put("expiracionCodigo", creado.getExpiracionCodigo().toString());
            return ResponseEntity.ok(response);

        }catch(IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al registrar: " + e.getMessage());
        }
    }
    @GetMapping("private")
    public ResponseEntity<?> MostrarTodos(){
        List<Usuario> todos = serviciousuario.MostrarTodos();
        return ResponseEntity.ok(todos);
    }

    @GetMapping("private/{sectorIndustria}")
    public ResponseEntity<?>MostrarSector(@PathVariable String sectorIndustria) {
        try {
            List<Usuario> sectores = serviciousuario.MostrarPorSector(sectorIndustria);
            return ResponseEntity.ok(sectores);

        } catch (IllegalArgumentException e){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al mostrar " + e.getMessage());
        }
    }
    @GetMapping("private/{cargoUsuario}")
    public ResponseEntity<?> MostrarCargo(@PathVariable String cargoUsuario) {
        try {
            List<Usuario> Cargos = serviciousuario.MostrarPorCargos(cargoUsuario);
            return ResponseEntity.ok(Cargos);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al mostrar " + e.getMessage());
        }
    }
    @GetMapping("private/{lugarUsuario}")
    public ResponseEntity<?> mostrarLugar(@PathVariable String lugarUsuario){
        try {
            List<Usuario> lugares = serviciousuario.MostrarPorLugar(lugarUsuario);
            return ResponseEntity.ok(lugares);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al mostrar " + e.getMessage());
        }
    }
    @GetMapping("private/{correoUsuario}")
    public ResponseEntity<?> mostrarCorreo(@PathVariable String correoUsuario){
        try {
        List<Usuario> Correo = serviciousuario.MostrarPorCorreo(correoUsuario);
        return ResponseEntity.ok(Correo);
        }catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al mostrar " + e.getMessage());
        }
    }
}
