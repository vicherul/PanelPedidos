import React from 'react';

// 2. Definición de la Interface
type EstadoPedido = 'Entregado' | 'Pendiente' | 'Cancelado';

interface Pedido {
  id: string;
  cliente: string;
  total: number;
  estado: EstadoPedido;
}

// 5. Mapeo de estilos para la lógica visual (Configuración fuera del renderizado)
const ESTILOS_BADGE: Record<EstadoPedido, string> = {
  Entregado: "bg-green-100 text-green-700 border-green-200",
  Pendiente: "bg-amber-100 text-amber-700 border-amber-200",
  Cancelado: "bg-red-100 text-red-700 border-red-200",
};

const TablaPedidos: React.FC = () => {
  // 3. Array de pedidos de prueba
  const pedidos: Pedido[] = [
    { id: "#ORD-772", cliente: "Alen Brito", total: 125.50, estado: 'Entregado' },
    { id: "#ORD-891", cliente: "Juan Topo", total: 45.00, estado: 'Pendiente' },
    { id: "#ORD-902", cliente: "Sara Vega", total: 210.99, estado: 'Entregado' },
    { id: "#ORD-115", cliente: "Pedro Picapiedra", total: 89.00, estado: 'Cancelado' },
  ];

  return (
    <div className="container-card overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Pedidos recientes</h3>
            <p className="text-sm text-gray-500">Resumen de los últimos pedidos y su estado</p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-sm text-gray-600">
            <div className="text-xs text-gray-400">Total pedidos</div>
            <div className="px-3 py-1 rounded-md bg-gray-50 text-slate-800 font-medium">{pedidos.length}</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
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
            {pedidos.map((pedido) => (
              <tr key={pedido.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-mono text-sm text-primary">{pedido.id}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{pedido.cliente}</td>
                <td className="px-6 py-4 text-gray-900">${pedido.total.toFixed(2)}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${ESTILOS_BADGE[pedido.estado]}`}>
                    {pedido.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-primary hover:underline">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPedidos;