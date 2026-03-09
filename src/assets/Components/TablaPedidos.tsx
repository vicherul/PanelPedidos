import React from 'react';

// 1. Tipos e Interfaces
type EstadoPedido = 'Entregado' | 'Pendiente' | 'Cancelado';

interface Pedido {
  id: string;
  cliente: string;
  total: number;
  estado: EstadoPedido;
}

// 2. Mapeo de estilos más sutiles y modernos
const CONFIG_ESTADO: Record<EstadoPedido, { clase: string; dot: string }> = {
  Entregado: { 
    clase: "bg-emerald-50 text-emerald-700 border-emerald-100", 
    dot: "bg-emerald-500" 
  },
  Pendiente: { 
    clase: "bg-amber-50 text-amber-700 border-amber-100", 
    dot: "bg-amber-500" 
  },
  Cancelado: { 
    clase: "bg-slate-50 text-slate-600 border-slate-200", 
    dot: "bg-slate-400" 
  },
};

const TablaPedidos: React.FC = () => {
  const pedidos: Pedido[] = [
    { id: "ORD-772", cliente: "Alen Brito", total: 125.50, estado: 'Entregado' },
    { id: "ORD-891", cliente: "Juan Topo", total: 45.00, estado: 'Pendiente' },
    { id: "ORD-902", cliente: "Sara Vega", total: 210.99, estado: 'Entregado' },
    { id: "ORD-115", cliente: "Pedro Picapiedra", total: 89.00, estado: 'Cancelado' },
  ];

  return (
    <div className="p-8 bg-[#fbfbfb] min-h-screen font-sans antialiased text-slate-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header con estilo limpio */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Pedidos recientes</h2>
            <p className="text-slate-500 text-sm mt-1">Gestiona y supervisa las transacciones de tu tienda.</p>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
            Exportar CSV
          </button>
        </div>

        {/* Tabla principal */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-100">ID</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-100">Cliente</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-100 text-right">Monto</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-100 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pedidos.map((pedido) => (
                <tr key={pedido.id} className="group hover:bg-slate-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                      #{pedido.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">
                        {pedido.cliente.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{pedido.cliente}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-medium tabular-nums text-slate-900">
                      ${pedido.total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${CONFIG_ESTADO[pedido.estado].clase}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${CONFIG_ESTADO[pedido.estado].dot}`} />
                        {pedido.estado}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* // Footer con información adicional */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30">
            <p className="text-xs text-slate-400">Mostrando {pedidos.length} pedidos realizados este mes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaPedidos;