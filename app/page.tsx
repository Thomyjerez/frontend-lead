'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service_requested: 'Instalación'
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.phone.length < 8) {
      setError('Por favor, ingresa un número de teléfono válido.');
      return;
    }

    setStatus('Procesando solicitud...');
    
    try {
      const response = await fetch('https://lead-machine-backend-99zp.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        router.push('/gracias');
      } else {
        setStatus('');
        setError('Hubo un error en el servidor. Intenta nuevamente.');
      }
    } catch (err) {
      console.error(err);
      setStatus('');
      setError('Error de conexión. Revisa tu internet.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Servicios para el Hogar
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Dejanos tus datos y un especialista te llamará de inmediato.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} 
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 text-black" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 text-black" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} 
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 text-black" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Servicio de interés</label>
            <select name="service_requested" value={formData.service_requested} onChange={handleChange} 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 text-black">
              <option value="Instalación">Instalación</option>
              <option value="Reparación">Reparación</option>
              <option value="Mantenimiento">Mantenimiento</option>
            </select>
          </div>

          {error && <p className="text-sm font-medium text-red-600 text-center bg-red-50 p-2 rounded">{error}</p>}
          {status && <p className="text-sm font-medium text-blue-600 text-center">{status}</p>}

          <button type="submit" disabled={status !== ''}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-4 rounded-md transition duration-200">
            {status !== '' ? 'Enviando...' : 'Solicitar Llamada Ahora'}
          </button>
        </form>
      </div>
    </main>
  );
}