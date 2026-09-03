"use client";

/*
 * Hooks de React.
 */
import { useEffect, useState } from "react";

/*
 * Página para crear órdenes.
 */
export default function NuevaOrdenPage() {

  /*
   * Lista de equipos.
   */
  const [equipos, setEquipos] = useState([]);

  /*
   * Equipo seleccionado.
   */
  const [equipoId, setEquipoId] = useState("");

  /*
   * Se ejecuta al cargar la página.
   */
  useEffect(() => {

    async function cargarEquipos() {

      const response = await fetch(
        "http://localhost:8080/api/equipos"
      );

      const data = await response.json();

      setEquipos(data);
    }

    cargarEquipos();

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Nueva Orden de Servicio
      </h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">

        <label className="block mb-2">
          Equipo
        </label>

        <select
          value={equipoId}
          onChange={(e) =>
            setEquipoId(e.target.value)
          }
          className="border w-full p-2 rounded"
        >

          <option value="">
            Seleccione un equipo
          </option>

          {equipos.map((equipo: any) => (

            <option
              key={equipo.id}
              value={equipo.id}
            >
              {equipo.marca} {equipo.modelo}
            </option>

          ))}

        </select>

      </div>

    </div>
  );
}