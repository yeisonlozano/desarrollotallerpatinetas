import Link from "next/link";
/*
 * Función encargada de consultar la API.
 *
 * Hace una petición al backend Spring Boot
 * para obtener todos los clientes registrados.
 */
async function obtenerClientes() {
  /*
   * fetch() realiza una petición HTTP GET.
   */
  const response = await fetch(
    "http://localhost:8080/api/clientes",

    /*
     * Evita que Next.js guarde la respuesta en caché.
     *
     * Así siempre veremos información actualizada.
     */
    {
      cache: "no-store",
    },
  );

  /*
   * Convierte la respuesta JSON en un objeto JavaScript.
   */
  return response.json();
}

/*
 * Página principal de clientes.
 *
 * Esta función se ejecuta en el servidor
 * porque es un Server Component de Next.js.
 */
export default async function ClientesPage() {
  /*
   * Consultamos los clientes que vienen del backend.
   */
  const clientes = await obtenerClientes();

  return (
    <div>
      {/* Título principal */}
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>

      {/* Contenedor de las tarjetas */}
      <div className="space-y-4">
        <div className="mb-6">
          <Link
            href="/clientes/nuevo"
            className="
               bg-green-600
               text-white
                px-4
                py-2
                rounded
              "
          >
            Nuevo Cliente
          </Link>
        </div>
        {/*
         * Recorremos cada cliente recibido
         * desde Spring Boot.
         */}
        {clientes.map((cliente: any) => (
          <div key={cliente.id} className="bg-white rounded shadow p-4">
            {/* Nombre del cliente */}
            <h2 className="font-bold text-xl text-slate-800">
              {cliente.nombre}
            </h2>

            {/* Teléfono */}
            <p className="text-gray-600">{cliente.telefono}</p>

            {/* Dirección */}
            <p className="text-gray-600">{cliente.direccion}</p>
            {/* Cédula */}
            <p className="text-gray-600">{cliente.cedula}</p>
            {/* Correo */}
            <p className="text-gray-600">{cliente.correo}</p>
            {/* Botón Nuevo Equipo */}

            <div className="mt-4">
              <Link
                href={`/clientes/${cliente.id}/nuevo-equipo`}
                className="
                bg-green-600
                text-white
                px-4
                py-2
                rounded
              "
              >
                Nuevo Equipo
              </Link>
            </div>

            {/* Sección de equipos */}
            <div className="mt-4">
              <h3 className="font-semibold text-slate-700">
                Equipos Registrados
              </h3>

              {cliente.equipos?.length > 0 ? (
                <div className="mt-2 space-y-2">
                  {cliente.equipos.map((equipo: any) => (
                    <div
                      key={equipo.id}
                      className="
                      border
                      rounded
                      p-2
                    bg-slate-50
                      "
                    >
                      <div className="font-medium">
                        {equipo.marca} - {equipo.modelo}
                      </div>

                      <div className="text-sm text-gray-600">
                        Serie: {equipo.numeroSerie}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mt-2">Sin equipos registrados</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
