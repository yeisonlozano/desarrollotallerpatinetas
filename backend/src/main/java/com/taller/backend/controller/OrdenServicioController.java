package com.taller.backend.controller;

import com.taller.backend.entity.OrdenServicio;
import com.taller.backend.repository.OrdenServicioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 * Controlador REST para las órdenes.
 */
@RestController

@RequestMapping("/api/ordenes")
public class OrdenServicioController {

    private final OrdenServicioRepository ordenRepository;

    public OrdenServicioController(
            OrdenServicioRepository ordenRepository) {

        this.ordenRepository = ordenRepository;
    }

    /*
     * Listar todas las órdenes.
     */
    @GetMapping
    public List<OrdenServicio> listar() {
        return ordenRepository.findAll();
    }

    /*
     * Crear una nueva orden.
     */
    @PostMapping
    public OrdenServicio crear(
            @RequestBody OrdenServicio orden) {

        long consecutivo = ordenRepository.count() + 1;

        String numeroOrden = String.format(
                "ORD-%06d",
                consecutivo);

        orden.setNumeroOrden(
                numeroOrden);

        return ordenRepository.save(
                orden);
    }
}