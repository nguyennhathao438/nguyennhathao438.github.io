import { BookOpen, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'Optimizing Distributed Systems with Machine Learning',
    venue: 'Journal of Systems Research',
    date: '2024',
    url: '#',
  },
  {
    title: 'LLMs in Production: Scaling and Reliability Considerations',
    venue: 'Tech Conference Proceedings',
    date: '2023',
    url: '#',
  },
  {
    title: 'Event-Driven Architecture Patterns for Modern Applications',
    venue: 'Software Engineering Quarterly',
    date: '2023',
    url: '#',
  },
]

const activities = [
  {
    title: 'Technical Writing',
    description: 'Regular contributor to technical blogs and publications, sharing insights on backend architecture, AI systems, and DevOps best practices.',
  },
  {
    title: 'Open Source Contributions',
    description: 'Active contributor to major open-source projects including distributed systems frameworks and AI infrastructure tools.',
  },
  {
    title: 'Conference Speaking',
    description: 'Regular speaker at tech conferences sharing practical insights on building scalable systems and AI-powered applications.',
  },
  {
    title: 'Mentorship',
    description: 'Mentor junior developers and help guide technical decisions for growing engineering teams.',
  },
]

export function ResearchSection() {
  return (
    <section
      id="research"
      className="border-b border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 dark:bg-primary/5"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Research & Publications
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded" />
          </div>

          {/* Publications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Publications</h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <a
                  key={pub.title}
                  href={pub.url}
                  className="block rounded-lg border border-border bg-background p-4 smooth-transition hover:border-accent hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground hover:text-accent">
                        {pub.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {pub.venue} • {pub.date}
                      </p>
                    </div>
                    <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Research Activities</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex gap-4 rounded-lg border border-border bg-background p-6 smooth-transition hover:border-accent"
                >
                  <BookOpen className="h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {activity.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
