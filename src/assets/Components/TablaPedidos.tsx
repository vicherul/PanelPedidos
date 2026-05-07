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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Panel de Administración: Pedidos</h2>
        </div>

        {/* 4. Tabla de Tailwind */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">ID Pedido</th>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pedidos.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-blue-600">{pedido.id}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{pedido.cliente}</td>
                  <td className="px-6 py-4 text-gray-900">${pedido.total.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center">
                    {/* 5. Aplicación del Badge con lógica visual */}
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ESTILOS_BADGE[pedido.estado]}`}>
                      {pedido.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaPedidos;