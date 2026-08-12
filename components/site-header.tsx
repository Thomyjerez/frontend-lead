export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            HogarPro
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Servicios
          </a>
          <a
            href="#beneficios"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Por qué elegirnos
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
        >
          Agendar visita
        </a>
      </div>
    </header>
  );
}
