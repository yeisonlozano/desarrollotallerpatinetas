"use client";

/*
 * Hook para manejar estado.
 */
import { useEffect, useState } from "react";

/*
 * Página para registrar equipos.
 */
export default function NuevoEquipoPage() {
  /*
   * Lista de clientes obtenidos
   * desde Spring Boot.
   */
  const [clientes, setClientes] = useState([]);

  /*
   * Cliente seleccionado.
   */
  const [clienteId, setClienteId] = useState("");

  /*
   * Se ejecuta una sola vez
   * cuando carga la página.
   */
  /*
   * Tipo de vehículo.
   */
  const [tipoVehiculo, setTipoVehiculo] = useState("");

  /*
   * Marca.
   */
  const [marca, setMarca] = useState("");

  /*
   * Modelo.
   */
  const [modelo, setModelo] = useState("");

  /*
   * Número de serie.
   */
  const [numeroSerie, setNumeroSerie] = useState("");

  /*
   * Color.
   */
  const [color, setColor] = useState("");

  /*
   * Observaciones.
   */
  const [observaciones, setObservaciones] = useState("");
  useEffect(() => {
    async function cargarClientes() {
      const response = await fetch("http://localhost:8080/api/clientes");

      const data = await response.json();

      setClientes(data);
    }

    cargarClientes();
  }, []);

  /*
   * Guarda un equipo en PostgreSQL.
   */
  async function guardarEquipo() {
    const response = await fetch("http://localhost:8080/api/equipos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        tipoVehiculo,
        marca,
        modelo,
        numeroSerie,
        color,
        observaciones,

        /*
         * Relación con cliente.
         */
        cliente: {
          id: Number(clienteId),
        },
      }),
    });

    if (response.ok) {
      alert("Equipo registrado correctamente");

      setTipoVehiculo("");
      setMarca("");
      setModelo("");
      setNumeroSerie("");
      setColor("");
      setObservaciones("");
    }
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nuevo Equipo</h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        <label className="block mb-2">Cliente</label>

        <select
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          className="border w-full p-2 rounded"
        >
          <option value="">Seleccione un cliente</option>

          {clientes.map((cliente: any) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre}
            </option>
          ))}
        </select>
        <div className="mt-4">
          <label className="block mb-2">Tipo Vehículo</label>

          <input
            value={tipoVehiculo}
            onChange={(e) => setTipoVehiculo(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Marca</label>

          <input
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Modelo</label>

          <input
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Número Serie</label>

          <input
            value={numeroSerie}
            onChange={(e) => setNumeroSerie(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Color</label>

          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Observaciones</label>

          <textarea
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
        <button
          onClick={guardarEquipo}
          className="
         bg-blue-600
         text-white
            px-4
            py-2
            rounded
            mt-6
            "
        >
          Guardar Equipo
        </button>
      </div>
    </div>
  );
}
