package com.taller.backend.entity;

// Importaciones de JPA para mapear la clase a una tabla
import jakarta.persistence.*;

// Lombok genera automáticamente getters y setters
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
    private String telefono;

    /*
     * Dirección del cliente.
     */
    private String direccion;

    /*
     * Un cliente puede tener varios equipos.
     */
    @OneToMany(mappedBy = "cliente")

    /*
     * Evita ciclos infinitos al convertir objetos a JSON.
     */

    @JsonIgnore

    private List<Equipo> equipos;
}