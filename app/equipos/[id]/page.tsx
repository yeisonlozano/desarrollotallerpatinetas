import Link from "next/link";
/*
 * Obtiene todos los equipos.
 */
async function obtenerEquipos() {
  const response = await fetch("http://localhost:8080/api/equipos", {
    cache: "no-store",
  });

  return response.json();
}
/*
 * Obtiene todas las órdenes.
 */
async function obtenerOrdenes() {
  const response = await fetch("http://localhost:8080/api/ordenes", {
    cache: "no-store",
  });

  return response.json();
}

/*
 * Página detalle del equipo.
 */
export default async function EquipoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  /*
   * ID de la URL.
   */
  const { id } = await params;

  /*
   * Consulta equipos.
   */
  const equipos = await obtenerEquipos();
  /*
   * Consulta órdenes.
   */
  const ordenes = await obtenerOrdenes();

  /*
   * Busca el equipo solicitado.
   */
  const equipo = equipos.find((e: any) => e.id === Number(id));

  if (!equipo) {
    return <p>Equipo no encontrado</p>;
  }
  /*
   * Filtra las órdenes que
   * pertenecen a este equipo.
   */
  const ordenesEquipo = ordenes.filter(
    (orden: any) => orden.equipo?.id === Number(id),
  );
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Detalle Equipo</h1>

      <div className="bg-white p-6 rounded shadow">
        <p>
          <strong>Marca:</strong> {equipo.marca}
        </p>

        <p>
          <strong>Modelo:</strong> {equipo.modelo}
        </p>

        <p>
          <strong>Tipo Vehículo:</strong> {equipo.tipoVehiculo}
        </p>

        <p>
          <strong>Serie:</strong> {equipo.numeroSerie}
        </p>

        <p>
          <strong>Color:</strong> {equipo.color}
        </p>

        <p>
          <strong>Observaciones:</strong> {equipo.observaciones}
        </p>
      </div>
      {/* Órdenes */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Órdenes de Servicio</h2>

        {ordenesEquipo.length > 0 ? (
          <div className="space-y-3">
            {ordenesEquipo.map((orden: any) => (
              <div
                key={orden.id}
                className="
                  border
                  rounded
                  p-3
                  bg-slate-50
                "
              >
                <div className="font-semibold">{orden.numeroOrden}</div>

                <div>Fecha: {orden.fechaIngreso}</div>

                <div>Problema: {orden.problemaReportado}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>Este equipo no tiene órdenes registradas.</p>
        )}
      </div>

      {/* Botón Nueva Orden */}
      <div >
        <Link
          href={`/equipos/${equipo.id}/nueva-orden`}
          className="
            inline-block
            bg-blue-900
            text-white  
            px-4
            py-2
            rounded
          "
        >
          Nueva Orden
        </Link>
      </div>
    </div>
  );
}
