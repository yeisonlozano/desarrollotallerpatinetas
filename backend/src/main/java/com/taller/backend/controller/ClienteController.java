package com.taller.backend.controller;

import com.taller.backend.entity.Cliente;
import com.taller.backend.repository.ClienteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 * Indica que esta clase expone endpoints REST.
 */
@RestController

/*
 * Ruta base del controlador.
 */
@RequestMapping("/api/clientes")
public class ClienteController {

    /*
     * Repositorio para acceder a la base de datos.
     */
    private final ClienteRepository clienteRepository;

    /*
     * Inyección de dependencias mediante constructor.
     */
    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /*
     * Devuelve todos los clientes registrados.
     */
    @GetMapping
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }

    /*
     * Guarda un nuevo cliente en la base de datos.
     */
    @PostMapping
    public Cliente crear(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
