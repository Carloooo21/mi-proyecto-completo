package com.example.registro.Repositorio;

import com.example.registro.Entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface usuarioRepositorio extends JpaRepository<Usuario, Long> {
        List<Usuario> findBySectorIndustrial(String sectorIndustrial);
        List<Usuario> findByCorreoUsuario(String correoUsuario);
        List<Usuario> findByCargoUsuario(String cargoUsuario);
        List<Usuario> findByLugarUsuario(String lugarUsuario);

}
