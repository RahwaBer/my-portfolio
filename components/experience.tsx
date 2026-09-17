import { SectionHeading } from '@/components/section-heading'

const roles = [
  {
    period: 'Feb 2025 — present',
    title: 'Digital Payment Officer',
    company: 'Ethswitch S.C.',
    points: [
      'Supported the integration, testing, and onboarding of financial institutions to digital payment systems',
      'Performed functional and integration testing of payment transactions and ISO 20022 messages',
      'Identifying and troubleshooting transaction and interface issues.',
    ],
  },
  {
    period: 'Sep 2024 — Jan 2025',
    title: 'Software Developer',
    company: 'Drongo Technology',
    points: [
      'Developed and maintained web applications, implementing responsive and user-friendly interfaces.',
      'Built CRUD functionality, authentication, and role-based access control',
      'Developed and enhanced the Drongo ERP website, providing company and ERP solution information'
    ],
  },
  {
    period: 'June 2023 — Sep 2023',
    title: 'Intern Backend Developer',
    company: 'Drongo Technology',
    points: [
      'Developed backend features using Laravel and PHP.',
      'Assisted in testing, debugging, and improving web applications',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="04" path="experience" title="git log --career" />

        <ol className="relative space-y-8 border-l border-border pl-6">
          {roles.map((r) => (
            <li key={r.period} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono text-xs text-terminal">{r.period}</p>
              <h3 className="mt-1 font-mono text-base font-medium text-foreground">
                {r.title}
                <span className="text-muted-foreground"> @ {r.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {r.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-pretty text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="text-primary">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
