export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
        {/* <p>
          <span className="text-terminal">$</span> built with Next.js &amp;
          Tailwind
        </p> */}
        <p>© {new Date().getFullYear()} Rahwa Berhane. All rights reserved.</p>
      </div>
    </footer>
  )
}
