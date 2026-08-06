import Link from 'next/link';

export default function Gracias() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Solicitud Recibida!</h1>
        <p className="text-gray-600 mb-6">
          Un especialista ya fue notificado y te llamará al número indicado en los próximos minutos.
        </p>
        <Link href="/" className="text-blue-600 font-medium hover:underline">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}