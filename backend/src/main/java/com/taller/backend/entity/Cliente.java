package com.taller.backend.entity;

// Importaciones de JPA para mapear la clase a una tabla
import jakarta.persistence.*;

// Lombok genera automáticamente getters y setters
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/*
 * @Entity indica que esta clase representa una tabla en la base de datos.
 */
@Entity

/*
 * El nombre de la tabla será "clientes".
 */
@Table(name = "clientes")

@Getter
@Setter
public class Cliente {

    /*
     * Clave primaria de la tabla.
     */
    @Id

    /*
     * El valor se genera automáticamente por PostgreSQL.
     */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
     * Nombre completo del cliente.
     */
    private String nombre;
    /*
     * Teléfono de contacto.
     */
    @Column(unique = true)
    private String cedula;
    /*
     * Teléfono de contacto.
     */
    private String telefono;

    /*
     * Dirección del cliente.
     */
    private String direccion;
    /*
     * Dirección del cliente.
     */
    private String correo;
    /*
     * Un cliente puede tener varios equipos.
     */
    /*
     * Equipos asociados al cliente.
     */
    @OneToMany(mappedBy = "cliente")

    /*
     * Permite mostrar los equipos
     * cuando consultamos clientes.
     */
    @JsonManagedReference
    private List<Equipo> equipos;
}