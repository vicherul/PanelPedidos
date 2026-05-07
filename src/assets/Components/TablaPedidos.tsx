import React from 'react'

type EstadoPedido = 'Entregado' | 'Pendiente' | 'Cancelado'

interface Pedido {
  id: string
  cliente: string
  total: number
  estado: EstadoPedido
}

const CONFIG_ESTADO: Record<EstadoPedido, { clase: string; dot: string }> = {
  Entregado: {
    clase: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    dot: 'bg-emerald-500',
  },
  Pendiente: {
    clase: 'bg-amber-50 text-amber-700 border-amber-100',
    dot: 'bg-amber-500',
  },
  Cancelado: {
    clase: 'bg-slate-50 text-slate-600 border-slate-200',
    dot: 'bg-slate-400',
  },
}

const TablaPedidos: React.FC = () => {
  const pedidos: Pedido[] = [
    { id: 'ORD-772', cliente: 'Alen Brito', total: 125.5, estado: 'Entregado' },
    { id: 'ORD-891', cliente: 'Juan Topo', total: 45.0, estado: 'Pendiente' },
    { id: 'ORD-902', cliente: 'Sara Vega', total: 210.99, estado: 'Entregado' },
    { id: 'ORD-115', cliente: 'Pedro Picapiedra', total: 89.0, estado: 'Cancelado' },
  ]

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto">
        <div className="container-card overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-slate-900">Panel de Administración: Pedidos</h2>
            <p className="text-sm text-gray-500 mt-1">Resumen de los pedidos recientes y estado actual</p>
          </div>

          <div className="overflow-x-auto">
            <div className="hidden sm:block">
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="text-xs text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Cliente</th>
                    <th className="px-6 py-3 text-left">Total</th>
                    <th className="px-6 py-3 text-center">Estado</th>
                    <th className="px-6 py-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {pedidos.map((pedido) => {
                    const badge = ['inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-semibold border shadow-sm', CONFIG_ESTADO[pedido.estado].clase].join(' ')
                    const dot = ['w-2.5 h-2.5 rounded-full', CONFIG_ESTADO[pedido.estado].dot].join(' ')

                    return (
                      <tr key={pedido.id} className="transition-colors table-row-hover">
                        <td className="px-6 py-4 font-mono text-sm text-primary w-36">{pedido.id}</td>
                        <td className="px-6 py-4 pl-8 text-gray-800 font-medium">{pedido.cliente}</td>
                        <td className="px-6 py-4 text-gray-900">${pedido.total.toFixed(2)}</td>
                        <td className="px-6 py-4 text-center">
                              <span className={`${badge} badge-pulse soft-transition`}> 
                                <span className={`${dot} inline-block`} />
                                {pedido.estado}
                              </span>
                            </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-sm text-primary hover:underline">Ver</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden px-3 py-2">
              {pedidos.map((pedido) => {
                const badge = ['inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-semibold border shadow-sm', CONFIG_ESTADO[pedido.estado].clase].join(' ')
                const dot = ['w-2.5 h-2.5 rounded-full', CONFIG_ESTADO[pedido.estado].dot].join(' ')

                return (
                  <div key={pedido.id} className="mb-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 soft-transition hover:shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="font-mono text-sm text-primary">{pedido.id}</div>
                          <div className="text-xs text-gray-400">•</div>
                          <div className="text-sm text-gray-700 font-medium">{pedido.cliente}</div>
                        </div>
                        <div className="mt-2 text-sm text-gray-900 font-semibold">${pedido.total.toFixed(2)}</div>
                      </div>

                      <div className="text-right flex flex-col items-end gap-2">
                        <div className={badge}>
                          <span className={dot} />
                          {pedido.estado}
                        </div>
                        <button className="text-sm text-primary hover:underline">Ver</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablaPedidos
