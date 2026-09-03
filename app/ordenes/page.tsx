import Link from "next/link";

/*
 * Página principal de órdenes.
 */
export default function OrdenesPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Órdenes de Servicio
      </h1>

      <Link
        href="/ordenes/nuevo"
        className="
          bg-green-600
          text-white
          px-4
          py-2
       "
      >
        Nuevo Orden
      </Link>

    </div>
  );
}