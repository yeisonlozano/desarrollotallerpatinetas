package com.taller.backend.repository;

import com.taller.backend.entity.OrdenServicio;
import org.springframework.data.jpa.repository.JpaRepository;

/*
 * Repositorio para la tabla ordenes_servicio.
 */
public interface OrdenServicioRepository
        extends JpaRepository<OrdenServicio, Long> {

}
