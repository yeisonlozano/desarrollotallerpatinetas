export default function Home() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <p className="mb-6 text-gray-600">
        Bienvenido al sistema de gestión Green Support
      </p>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Clientes
          </h2>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Equipos
          </h2>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Órdenes
          </h2>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>

      </div>

    </div>
  );
}
