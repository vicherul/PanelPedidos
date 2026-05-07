import TablaPedidos from "./assets/Components/TablaPedidos"

function App() {
  return (
    <div className="min-h-screen py-10 bg-[length:100%_auto]">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 flex items-center justify-between sticky top-6 z-20 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">Panel de Pedidos</h1>
                <p className="text-sm text-gray-500">Visión general y gestión de pedidos recientes</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="relative block">
              <span className="sr-only">Buscar</span>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                </svg>
              </span>
              <input
                className="pl-10 pr-3 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none w-64"
                placeholder="Buscar por cliente o ID..."
              />
            </label>

            <button className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow-md text-sm hover:bg-blue-600 transition-shadow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nuevo pedido
            </button>
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
