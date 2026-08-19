package com.taller.backend.repository;

import com.taller.backend.entity.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;

/*
 * Repositorio para la tabla equipos.
 */
public interface EquipoRepository
        extends JpaRepository<Equipo, Long> {

}