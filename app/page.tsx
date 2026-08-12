"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// --- DATOS DEL HERO ---
const heroBenefits = [
  {
    title: "Instalación",
    description: "Equipos y sistemas montados correctamente a la primera.",
    icon: (
      <>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Reparación",
    description: "Diagnóstico rápido y soluciones que duran de verdad.",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
      </>
    ),
  },
  {
    title: "Mantenimiento",
    description: "Planes preventivos para evitar fallas costosas.",
    icon: (
      <>
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M5 12H3" />
        <path d="M21 12h-2" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
];

const services = ["Instalación", "Reparación", "Mantenimiento"] as const;

// --- DATOS DE WHY US ---
const features = [
  {
    title: "Técnicos verificados",
    description: "Cada profesional pasa por verificación de antecedentes y evaluación técnica antes de entrar a tu casa.",
    icon: (
      <>
        <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Precios transparentes",
    description: "Cotización clara antes de empezar. Sin sorpresas ni cargos ocultos al final del trabajo.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M9.5 9.5a2.5 2 0 0 1 5 0c0 1.5-2.5 1.5-2.5 3" />
      </>
    ),
  },
  {
    title: "Garantía por escrito",
    description: "Respaldamos cada servicio con garantía documentada. Si algo falla, volvemos sin costo.",
    icon: (
      <>
        <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z" />
      </>
    ),
  },
  {
    title: "Atención el mismo día",
    description: "Coordinamos tu visita en horas, no en días. Disponibilidad para urgencias del hogar.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

export default function Home() {
  const router = useRouter();

  // --- ESTADOS DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_requested: "Instalación",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        }
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
    <div className="flex min-h-screen flex-col">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="M5 9.5V21h14V9.5" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              HogarPro
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#servicios" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Servicios
            </a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Por qué elegirnos
            </a>
            <a href="#contacto" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Contacto
            </a>
          </nav>

          <a href="#contacto" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover">
            Agendar visita
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden bg-muted/50">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/8 to-transparent" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
            
            {/* Lado Izquierdo: Textos */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                +5.000 hogares atendidos
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl">
                Tu hogar en manos de <span className="text-primary">técnicos certificados</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
                Instalación, reparación y mantenimiento con precios claros y garantía por escrito. Solicita una llamada y coordina tu visita el mismo día.
              </p>

              <ul id="servicios" className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroBenefits.map((benefit) => (
                  <li key={benefit.title} className="rounded-xl border border-border bg-background p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {benefit.icon}
                      </svg>
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </li>
                ))}
              </ul>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                <div>
                  <dt className="text-2xl font-semibold text-foreground">4.9/5</dt>
                  <dd className="text-xs text-muted-foreground">Valoración media</dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-foreground">24 h</dt>
                  <dd className="text-xs text-muted-foreground">Respuesta garantizada</dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-foreground">100%</dt>
                  <dd className="text-xs text-muted-foreground">Trabajos con garantía</dd>
                </div>
              </dl>
            </div>

            {/* Lado Derecho: Formulario */}
            <div id="contacto" className="lg:pl-4">
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
                    Déjanos tus datos y un especialista te llamará para coordinar la visita.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre completo</label>
                    <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Ej. María González" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Teléfono</label>
                    <input id="phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Ej. +52 55 1234 5678" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Correo electrónico</label>
                    <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="tucorreo@ejemplo.com" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service_requested" className="text-sm font-medium text-foreground">Servicio de interés</label>
                    <select id="service_requested" name="service_requested" value={formData.service_requested} onChange={handleChange} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30">
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-center text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}
                  {status && (
                    <p className="text-center text-sm font-medium text-primary">
                      {status}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting} className="mt-1 w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-60">
                    {isSubmitting ? "Enviando..." : "Solicitar llamada ahora"}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    Sin compromiso · Tus datos están protegidos
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY US SECTION --- */}
        <section id="beneficios" className="bg-background">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Por qué elegirnos
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                La tranquilidad de contratar bien a la primera
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Combinamos profesionales expertos con procesos claros para que confíes en cada visita a tu hogar.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-[0_16px_40px_-24px_rgba(31,91,255,0.5)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {feature.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="M5 9.5V21h14V9.5" />
              </svg>
            </span>
            <span className="text-base font-semibold text-foreground">
              HogarPro
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HogarPro. Servicios para el hogar con garantía.
          </p>
        </div>
      </footer>
    </div>
  );
}