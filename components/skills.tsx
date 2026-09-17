import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    label: 'backend_&_web',
    items: ['Laravel', 'Node.js', 'Python',  'Next.js', 'React', 'JavaScript', 'MongoDB', 'MySQL'],
  },
  {
    label: 'ml_&_data',
    items: ['PyTorch', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Streamlit',],
  },
  
  {
    label: 'payments_&_integration',
    items: ['ISO 20022', 'Payment APIs', 'API Integration', 'Postman', 'JMeter',],
  },
  {
    label: 'infra_&_tools',
    items: ['Git', 'Github', 'Vercel', 'VS Code', 'Mantis'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading index="02" path="skills" title="tech_stack --list" />

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-md border border-border bg-card p-5"
            >
              <p className="mb-4 font-mono text-sm text-primary">
                <span className="text-muted-foreground">const </span>
                {g.label}
                <span className="text-muted-foreground"> = [</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-sm text-muted-foreground">]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
