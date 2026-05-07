import TablaPedidos from "./assets/Components/TablaPedidos"

function App() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Panel de Pedidos</h1>
            <p className="text-sm text-gray-500">Visión general y gestión de pedidos recientes</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Buscar por cliente o ID..."
            />
            <button className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow-sm text-sm hover:bg-blue-600">Nuevo pedido</button>
          </div>
        </header>

        <main>
          <TablaPedidos />
        </main>
      </div>
    </div>
  )
}

export default App
