"use client";

/*
 * Hooks de React.
 */
import { useEffect, useState } from "react";

/*
 * Obtiene parámetros de la URL.
 */
import { useParams } from "next/navigation";

/*
 * Página para registrar equipos
 * asociados a un cliente.
 */
export default function NuevoEquipoClientePage() {

  /*
   * Obtiene el id desde:
   * /clientes/[id]/nuevo-equipo
   */
  const params = useParams();

  /*
   * ID del cliente.
   */
  const clienteId = params.id as string;

  /*
   * Cliente obtenido desde la API.
   */
  const [cliente, setCliente] = useState<any>(null);

  /*
   * Campos del formulario.
   */
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [numeroSerie, setNumeroSerie] = useState("");
  const [color, setColor] = useState("");
  const [observaciones, setObservaciones] = useState("");

  /*
   * Carga la información del cliente.
   */
  useEffect(() => {

    async function cargarCliente() {

      const response = await fetch(
        "http://localhost:8080/api/clientes"
      );

      const clientes = await response.json();

      const clienteEncontrado = clientes.find(
        (c: any) => c.id === Number(clienteId)
      );

      setCliente(clienteEncontrado);
    }

    cargarCliente();

  }, [clienteId]);

  /*
   * Guarda un equipo asociado
   * al cliente actual.
   */
  async function guardarEquipo() {

    const response = await fetch(
      "http://localhost:8080/api/equipos",
      {
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

          cliente: {
            id: Number(clienteId),
          },

        }),
      }
    );

    if (response.ok) {

      alert("Equipo registrado correctamente");

      setTipoVehiculo("");
      setMarca("");
      setModelo("");
      setNumeroSerie("");
      setColor("");
      setObservaciones("");

    } else {

      alert("Error al registrar equipo");

    }
  }

  /*
   * Mientras carga el cliente.
   */
  if (!cliente) {

    return (
      <p>Cargando cliente...</p>
    );

  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-4">
        Nuevo Equipo
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <p className="mb-6">
          <strong>Cliente:</strong>{" "}
          {cliente.nombre}
        </p>

        <div className="mb-4">

          <label className="block mb-2">
            Tipo Vehículo
          </label>

          <input
            value={tipoVehiculo}
            onChange={(e) =>
              setTipoVehiculo(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <div className="mb-4">

          <label className="block mb-2">
            Marca
          </label>

          <input
            value={marca}
            onChange={(e) =>
              setMarca(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <div className="mb-4">

          <label className="block mb-2">
            Modelo
          </label>

          <input
            value={modelo}
            onChange={(e) =>
              setModelo(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <div className="mb-4">

          <label className="block mb-2">
            Número Serie
          </label>

          <input
            value={numeroSerie}
            onChange={(e) =>
              setNumeroSerie(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <div className="mb-4">

          <label className="block mb-2">
            Color
          </label>

          <input
            value={color}
            onChange={(e) =>
              setColor(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <div className="mb-4">

          <label className="block mb-2">
            Observaciones
          </label>

          <textarea
            value={observaciones}
            onChange={(e) =>
              setObservaciones(e.target.value)
            }
            className="border w-full p-2 rounded"
          />

        </div>

        <button
          onClick={guardarEquipo}
          className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          Guardar Equipo
        </button>

      </div>

    </div>
  );
}