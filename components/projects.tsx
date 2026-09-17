import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    name: 'Marefiya Adoption Management System',
    desc: 'A project to simplify the adoption system and Implemented features such as user authentication, reporting and a responsive interface to enhance the overall user experience throughout the adoption process.',
    tags: ['Node.js', 'React', 'MongoDB'],
    
  },
  {
    name: 'Dahab web application',
    desc: 'Developed a Laravel-based CRUD application with Livewire, implementing role-based functionality and integrating supporting packages to streamline operations and enhance overall functionality.',
    tags: ['Laravel', 'Livewire', 'Breeze', 'Jetstream'],
    
  },
  {
    name: 'Drongo ERP website',
    desc: 'A website that provides detailed information about the company, including its ERP solutions and service packages. It also lets users explore available services and register online.',
    tags: ['Larvel', 'Tailwind', 'JavaScript'],
    
  },
  {
    name: 'Credit-Risk-Probability',
    desc: 'A complete ML workflow including training, tuning, evaluation, tracking, and versioned model registration, with testing to ensure code robustness.',
    tags: [  'Python', 'Scikit-learn', 'MLflow', 'Pytest', 'Pandas', 'NumPy'],
  },
  {
    name: 'Time Series Forecasting-',
    desc: 'Conducted an end-to-end exploratory data analysis and time-series forecasting project using historical financial data for TSLA, SPY, and BND. Analyzed price movements, daily returns, volatility, distributions, outliers, and market behavior to identify trends and patterns. Evaluated the statistical properties of the time series, including stationarity and autocorrelation, and applied appropriate transformations and forecasting techniques to model future price movements. ',
    tags: ['Matplotlib', 'Scikit-learn', 'Time Series'], 
  },
  {
    name: 'Customer Compliant Analysis',
    desc: 'An intelligent customer complaint analysis system using Retrieval-Augmented Generation (RAG), including text chunking, embeddings, and vector store indexing. Built and evaluated the RAG core logic to retrieve relevant complaint information and generate context-aware responses. Created an interactive chat interface that allows users to query customer complaints and receive relevant answers.',
    tags: ['RAG','NLP', 'LLM', 'Embeddings', 'Streamlit'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="03" path="projects" title="ls -la ./projects" />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/60"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="font-mono text-base font-medium text-foreground">
                <span className="text-primary">{'>'}</span> {p.name}
              </h3>
              {/* <span className="rounded-sm bg-terminal/10 px-2 py-0.5 font-mono text-xs text-terminal">
                {p.metric}
              </span> */}
            </div>

            <p className="mb-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* <div className="flex gap-4 font-mono text-xs">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                [ source ]
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                [ live ]
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  )
}
