const skillCategories = [
  {
    category: 'Backend Development',
    skills: ['Django', 'SpringBoot', 'Node.js', 'Laravel','MySql', 'MongoDB'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['LLMs', 'NLP', 'Hugging Face', 'Transformer'],
  },
  {
    category: 'System Design',
    skills: [ 'API Design','Database Design','Authentication & Authorization','System Architecture'],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 dark:bg-primary/5"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Skills & Expertise
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-lg border border-border bg-background p-6 smooth-transition hover:border-accent hover:shadow-lg dark:hover:shadow-accent/10"
              >
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-accent/10 dark:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
