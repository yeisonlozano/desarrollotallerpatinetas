
import Link from "next/link";
/*
 * Obtiene todos los equipos.
 */
async function obtenerEquipos() {

  const response = await fetch(
    "http://localhost:8080/api/equipos",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

/*
 * Página detalle del equipo.
 */
export default async function EquipoDetallePage(
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {

  /*
   * ID de la URL.
   */
  const { id } = await params;

  /*
   * Consulta equipos.
   */
  const equipos = await obtenerEquipos();

  /*
   * Busca el equipo solicitado.
   */
  const equipo = equipos.find(
    (e: any) => e.id === Number(id)
  );

  if (!equipo) {

    return (
      <p>Equipo no encontrado</p>
    );

  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Detalle Equipo
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <p>
          <strong>Marca:</strong>
          {" "}
          {equipo.marca}
        </p>

        <p>
          <strong>Modelo:</strong>
          {" "}
          {equipo.modelo}
        </p>

        <p>
          <strong>Tipo Vehículo:</strong>
          {" "}
          {equipo.tipoVehiculo}
        </p>

        <p>
          <strong>Serie:</strong>
          {" "}
          {equipo.numeroSerie}
        </p>

        <p>
          <strong>Color:</strong>
          {" "}
          {equipo.color}
        </p>

        <p>
          <strong>Observaciones:</strong>
          {" "}
          {equipo.observaciones}
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow">
          <Link
            href={`/equipos/${equipo.id}/nueva-orden`}
            className="
               bg-green-600
               text-white
                px-4
                py-2
                rounded
              "
          >
            Nuevo Orden
          </Link>
        </div>

    </div>
  );
}