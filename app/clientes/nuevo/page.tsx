"use client";

import { useState } from "react";
/*
 * Hook de navegación de Next.js.
 */
import { useRouter } from "next/navigation";

export default function NuevoClientePage() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");

  const router = useRouter();
  /*
   * Guarda un cliente en PostgreSQL.
   */
  async function guardarCliente() {
    const response = await fetch("http://localhost:8080/api/clientes", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        nombre,
        telefono,
        direccion,
        cedula,
        correo,
      }),
    });

    /*
     * Verificamos si la petición fue exitosa.
     */
    if (response.ok) {
      alert("Cliente guardado correctamente");

      /*
       * Redirige al listado.
       */
      router.push("/clientes");

      /*
       * Actualiza los datos.
       */
      router.refresh();
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nuevo Cliente</h1>

      <input
        className="border p-2 block mb-2"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="border p-2 block mb-2"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <input
        className="border p-2 block mb-4"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <input
        className="border p-2 block mb-4"
        placeholder="Cédula"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
      />
      <input
        className="border p-2 block mb-4"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button
        onClick={guardarCliente}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Guardar
      </button>
    </div>
  );
}