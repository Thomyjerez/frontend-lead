'use client';
import { useEffect, useState } from 'react';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  service_requested: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const response = await fetch('https://lead-machine-backend-99zp.onrender.com/');
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (error) {
      console.error("Error cargando leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que querés borrar este lead?')) return;

    try {
      const response = await fetch(`https://lead-machine-backend-99zp.onrender.com/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setLeads(leads.filter(lead => lead.id !== id));
      } else {
        alert("Hubo un error al borrar el lead");
      }
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Panel de Administración de Leads</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {loading ? (
            <p className="p-8 text-center text-gray-500">Cargando leads...</p>
          ) : leads.length === 0 ? (
            <p className="p-8 text-center text-gray-500">No hay leads pendientes. ¡Excelente trabajo!</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-4 font-semibold text-gray-700">Nombre</th>
                  <th className="p-4 font-semibold text-gray-700">Teléfono</th>
                  <th className="p-4 font-semibold text-gray-700">Email</th>
                  <th className="p-4 font-semibold text-gray-700">Servicio</th>
                  <th className="p-4 font-semibold text-gray-700 text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 text-gray-900">{lead.name}</td>
                    <td className="p-4 text-gray-900 font-medium">{lead.phone}</td>
                    <td className="p-4 text-gray-600">{lead.email}</td>
                    <td className="p-4 text-gray-900">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {lead.service_requested}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-500 hover:text-red-700 font-medium px-3 py-1 rounded border border-red-500 hover:bg-red-50 transition"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}