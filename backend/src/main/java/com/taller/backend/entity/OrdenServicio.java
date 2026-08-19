package com.taller.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

/*
 * Representa una orden de trabajo
 * del taller.
 */
@Entity

@Table(name = "ordenes_servicio")
public class OrdenServicio {

    /*
     * ID interno.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
     * Consecutivo visible para el cliente.
     *
     * Ejemplo:
     * ORD-0001
     */
    private String numeroOrden;

    /*
     * Fecha de llegada al taller.
     */
    private LocalDate fechaIngreso;

    /*
     * Estado del vehículo al ingresar.
     */
    @Column(length = 1500)
    private String condicionesAlRecibir;

    /*
     * Falla descrita por el cliente.
     */
    @Column(length = 1500)
    private String problemaReportado;

    /*
     * Estado del vehículo al entregar.
     */
    @Column(length = 1500)
    private String condicionesAlEntregar;

    /*
     * La orden pertenece a un equipo.
     */
    @ManyToOne
    @JoinColumn(name = "equipo_id")
    private Equipo equipo;

    // ===== Getters y Setters =====

    public Long getId() {
        return id;
    }

    public String getNumeroOrden() {
        return numeroOrden;
    }

    public void setNumeroOrden(String numeroOrden) {
        this.numeroOrden = numeroOrden;
    }

    public LocalDate getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(LocalDate fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getCondicionesAlRecibir() {
        return condicionesAlRecibir;
    }

    public void setCondicionesAlRecibir(String condicionesAlRecibir) {
        this.condicionesAlRecibir = condicionesAlRecibir;
    }

    public String getProblemaReportado() {
        return problemaReportado;
    }

    public void setProblemaReportado(String problemaReportado) {
        this.problemaReportado = problemaReportado;
    }

    public String getCondicionesAlEntregar() {
        return condicionesAlEntregar;
    }

    public void setCondicionesAlEntregar(String condicionesAlEntregar) {
        this.condicionesAlEntregar = condicionesAlEntregar;
    }

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }
}
