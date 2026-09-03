import Link from "next/link";

export default function EquiposPage() {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Equipos
      </h1>

      <Link
        href="/equipos/nuevo"
        className="
          bg-green-600
          text-white
          px-4
          py-2
          rounded
          hover:bg-green-700
        "
      >
        Nuevo Equipo
      </Link>

    </div>
  );
}