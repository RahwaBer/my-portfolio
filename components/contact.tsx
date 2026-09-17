'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/section-heading'

const socials = [
  { label: 'github', handle:'github.com/RahwaBer/', href: 'https://github.com/RahwaBer/' },
  { label: 'linkedin', handle:'linkedin.com/in/rahwa-berhane',href: 'https://www.linkedin.com/in/rahwa-berhane-468277275/' },
  { label: 'email', handle: 'rahwa7ber@gmail.com', href: 'mailto:rahwa7ber@gmail.com' },
  { label: 'Phone Num', handle: '+251983312305', href: '#' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Wire this up to an email service or API route.
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="05" path="contact" title="./connect.sh" />

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="rounded-md border border-border bg-card">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-terminal/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                message.txt
              </span>
            </div>

            {sent ? (
              <div className="p-6 font-mono text-sm">
                <p className="text-terminal">
                  {'>'} message sent successfully.
                </p>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="mt-4 text-primary underline-offset-4 hover:underline"
                >
                  [ send another ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-primary"
                  >
                    name:
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-primary"
                  >
                    email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                   />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-primary"
                  >
                    message:
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-sm border border-input bg-background px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {'> send_message()'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            {'// or find me here'}
          </p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 transition-colors hover:border-primary/60"
                >
                  <span className="font-mono text-sm text-foreground">
                    <span className="text-primary">$</span> {s.label}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    {s.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
