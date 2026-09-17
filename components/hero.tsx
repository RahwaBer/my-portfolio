const stack = ['Python', 'TypeScript', 'PyTorch', 'React', 'SQL']

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 pt-24 pb-10">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:radial-gradient(closest-side,var(--accent),transparent)] [background-position:70%_20%] [background-repeat:no-repeat] [background-size:60%_60%]" />

      {/* <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-terminal" />
        Available for opportunities
      </div> */}

      <p className="mb-4 font-mono text-sm font-medium text-primary">
        Software Engineer &amp; Data Scientist
      </p>

      <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
        Rahwa Berhane
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        I design and ship reliable systems, and turn messy data into models and
        products that make decisions clearer.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
