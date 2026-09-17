import { SectionHeading } from '@/components/section-heading'

const facts = [
  { k: 'role', v: 'Software Engineer / Data Scientist' },
  { k: 'focus', v: 'ML systems, data, web apps, fintech' },
  { k: 'experience', v: '2+ years in tech realted field' },
  { k: 'location', v: 'Addis Abab, Ethiopia' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-24">
      <SectionHeading index="01" path="about" title="whoami" />

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="space-y-4 text-pretty text-justify leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a software engineer who enjoys learning, building things, and exploring new areas of technology. I&apos;m particularly interested in web development, data analysis, and machine learning, and I enjoy turning what I learn into practical projects.
            </p>    
            <p>
              I enjoy solving problems and finding simple ways to turn ideas into useful solutions. 
              Outside of work and learning, 
              I like exploring new ideas and continuously challenging myself to learn something new.
            </p>
            <p>
              I&apos;m always looking for opportunities to improve my skills,
              try new technologies, and grow as a developer.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-md border border-border bg-card">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-terminal/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                profile.json
              </span>
            </div>
            <dl className="space-y-3 p-4 font-mono text-sm">
              {facts.map((f) => (
                <div key={f.k} className="flex flex-col gap-0.5">
                  <dt className="text-primary">{f.k}:</dt>
                  <dd className="text-muted-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
