package com.taller.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

// Importaciones de JPA para mapear la entidad
import jakarta.persistence.*;
import java.util.List;

/*
 * @Entity indica que esta clase se convertirá en una tabla
 * dentro de PostgreSQL.
 */
@Entity

/*
 * Nombre de la tabla en la base de datos.
 */
@Table(name = "equipos")
public class Equipo {

    /*
     * Clave primaria de la tabla.
     */
    @Id

    /*
     * PostgreSQL generará automáticamente el ID.
     */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
     * Tipo de vehiculo.
     * Ej: Moto, Patineta, Bicicleta.
     */
    private String tipoVehiculo;
    /*
     * Marca de la patineta.
     * Ej: Xiaomi, Segway, Kugoo.
     */
    private String marca;
    /*
     * Modelo de la patineta.
     * Ej: pro, es2, es3.
     */
    private String modelo;
    /*
     * Número de serie del equipo.
     */
    private String numeroSerie;
    /*
     * Color de la patineta.
     */
    private String color;
    /*
     * Relación muchos a uno.
     *
     * Muchos equipos pueden pertenecer
     * a un único cliente.
     */
    private String observaciones;
    /*
     * Relación muchos a uno.
     *
     * Muchos equipos pueden pertenecer
     * a un único cliente.
     */
    @ManyToOne

    /*
     * Nombre de la columna FK.
     */
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;


    @OneToMany(mappedBy = "equipo")
    @JsonIgnore
    private List<OrdenServicio> ordenes;

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public String getTipoVehiculo() {
        return tipoVehiculo;
    }

    public void setVehiculo(String tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setobservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}