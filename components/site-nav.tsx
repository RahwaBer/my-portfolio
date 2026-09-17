'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

export function SiteNav() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const l of links) {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Rahwa Berhane
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-colors',
                  active === l.id
                    ? 'bg-accent text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-sm text-muted-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border/60 px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-1.5 font-mono text-sm',
                  active === l.id ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <span className="text-terminal-dim">$ </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
