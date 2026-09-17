export function SectionHeading({
  index,
  path,
  title,
}: {
  index: string
  path: string
  title: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span className="font-mono text-sm text-terminal">
        <span className="text-muted-foreground">{index}. </span>
        <span className="text-terminal-dim">~/</span>
        {path}
        <span className="ml-1 text-muted-foreground">$</span>
      </span>
      <h2 className="text-pretty font-mono text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
    </div>
  )
}
