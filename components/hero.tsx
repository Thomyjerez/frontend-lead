import { ContactForm } from "./contact-form";

const benefits = [
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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/8 to-transparent"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            +5.000 hogares atendidos
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl">
            Tu hogar en manos de{" "}
            <span className="text-primary">técnicos certificados</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
            Instalación, reparación y mantenimiento con precios claros y
            garantía por escrito. Solicita una llamada y coordina tu visita el
            mismo día.
          </p>

          <ul
            id="servicios"
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="rounded-xl border border-border bg-background p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </svg>
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
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
              <dd className="text-xs text-muted-foreground">
                Respuesta garantizada
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-foreground">100%</dt>
              <dd className="text-xs text-muted-foreground">
                Trabajos con garantía
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: form */}
        <div id="contacto" className="lg:pl-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
