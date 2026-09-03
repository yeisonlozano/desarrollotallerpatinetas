"use client";

/*
 * Hooks de React.
 */
import { useState } from "react";
import { useParams } from "next/navigation";

/*
 * Página para registrar órdenes.
 */
export default function NuevaOrdenPage() {
  /*
   * Número de orden.
   *
   * Temporalmente fijo.
   * Luego lo generaremos automáticamente.
   */
  const [numeroOrden, setNumeroOrden] = useState("ORD-0001");

  /*
   * Fecha de ingreso.
   */
  const [fechaIngreso, setFechaIngreso] = useState("");

  /*
   * Problema reportado.
   */
  const [problemaReportado, setProblemaReportado] = useState("");

  /*
   * Condiciones al recibir.
   */
  const [condicionesAlRecibir, setCondicionesAlRecibir] = useState("");
  /*
   * Obtiene parámetros de la URL.
   */
  const params = useParams();

  /*
   * ID del equipo.
   */
  const equipoId = params.id as string;

  async function guardarOrden() {
    const response = await fetch("http://localhost:8080/api/ordenes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numeroOrden,
        fechaIngreso,
        problemaReportado,
        condicionesAlRecibir,
        equipo: {
          id: Number(equipoId),
        },
      }),
    });
    if (response.ok) {
      alert("Orden registrada correctamente");
      /*
       * Limpia el formulario.
       */
      setFechaIngreso("");
      setProblemaReportado("");
      setCondicionesAlRecibir("");
    } else {
      alert("Error al registrar la orden");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nueva Orden de Servicio</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <div className="mb-4">
          <label className="block mb-2">Número Orden</label>

          <input
            value={numeroOrden}
            readOnly
            className="
              border
              w-full
              p-2
              rounded
              bg-gray-100
            "
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Fecha Ingreso</label>

          <input
            type="date"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            className="
              border
              w-full
              p-2
              rounded
            "
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Problema Reportado</label>

          <textarea
            value={problemaReportado}
            onChange={(e) => setProblemaReportado(e.target.value)}
            className="
              border
              w-full
              p-2
              rounded
            "
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Condiciones al Recibir</label>

          <textarea
            value={condicionesAlRecibir}
            onChange={(e) => setCondicionesAlRecibir(e.target.value)}
            className="
              border
              w-full
              p-2
              rounded
            "
          />
        </div>

        <button
          onClick={guardarOrden}
          className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          Guardar Orden
        </button>
      </div>
    </div>
  );
}
