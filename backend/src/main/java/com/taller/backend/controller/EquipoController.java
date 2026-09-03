package com.taller.backend.controller;

import com.taller.backend.entity.Equipo;
import com.taller.backend.repository.EquipoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/*
 * Controlador REST para equipos.
 */
@RestController

/*
 * Ruta base.
 */
@RequestMapping("/api/equipos")
public class EquipoController {

    /*
     * Repositorio de equipos.
     */
    private final EquipoRepository equipoRepository;

    /*
     * Inyección por constructor.
     */
    public EquipoController(
            EquipoRepository equipoRepository) {

        this.equipoRepository = equipoRepository;
    }

    /*
     * Listar todos los equipos.
     */
    @GetMapping
    public List<Equipo> listar() {
        return equipoRepository.findAll();
    }

    /*
     * Crear equipo.
     */
    @PostMapping
    public Equipo crear(
            @RequestBody Equipo equipo) {

        return equipoRepository.save(equipo);
    }
}