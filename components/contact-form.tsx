"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const services = ["Instalación", "Reparación", "Mantenimiento"] as const;

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_requested: "Instalación",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phone.replace(/\D/g, "").length < 8) {
      setError("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    setStatus("Procesando solicitud...");

    try {
      const response = await fetch(
        "https://lead-machine-backend-99zp.onrender.com/api/leads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        router.push("/gracias");
      } else {
        setStatus("");
        setError("Hubo un error en el servidor. Intenta nuevamente.");
      }
    } catch (err) {
      console.error("[v0] lead submit error:", err);
      setStatus("");
      setError("Error de conexión. Revisa tu internet.");
    }
  };

  const isSubmitting = status !== "";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-25px_rgba(15,25,45,0.35)] sm:p-8">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Respuesta el mismo día
        </span>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground text-balance">
          Solicita tu llamada gratuita
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Déjanos tus datos y un especialista te llamará para coordinar la
          visita.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. María González"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. +52 55 1234 5678"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="service_requested"
            className="text-sm font-medium text-foreground"
          >
            Servicio de interés
          </label>
          <select
            id="service_requested"
            name="service_requested"
            value={formData.service_requested}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-3 py-2 text-center text-sm font-medium text-red-600"
          >
            {error}
          </p>
        )}
        {status && (
          <p className="text-center text-sm font-medium text-primary">
            {status}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Solicitar llamada ahora"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          Sin compromiso · Tus datos están protegidos
        </p>
      </form>
    </div>
  );
}
