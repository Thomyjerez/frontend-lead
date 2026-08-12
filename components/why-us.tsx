const features = [
  {
    title: "Técnicos verificados",
    description:
      "Cada profesional pasa por verificación de antecedentes y evaluación técnica antes de entrar a tu casa.",
    icon: (
      <>
        <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Precios transparentes",
    description:
      "Cotización clara antes de empezar. Sin sorpresas ni cargos ocultos al final del trabajo.",
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
    description:
      "Respaldamos cada servicio con garantía documentada. Si algo falla, volvemos sin costo.",
    icon: (
      <>
        <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z" />
      </>
    ),
  },
  {
    title: "Atención el mismo día",
    description:
      "Coordinamos tu visita en horas, no en días. Disponibilidad para urgencias del hogar.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

export function WhyUs() {
  return (
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
            Combinamos profesionales expertos con procesos claros para que
            confíes en cada visita a tu hogar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-[0_16px_40px_-24px_rgba(31,91,255,0.5)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
