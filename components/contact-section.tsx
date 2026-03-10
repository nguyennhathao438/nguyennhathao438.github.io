import { Mail, Github, Linkedin, Twitter, MapPin ,Facebook ,Phone} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hao362k5@gmail.com',
    href: 'mailto:hao362k5@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/nguyennhathao438',
    href: 'https://github.com/nguyennhathao438',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Nguyen Nhat Hao',
    href: 'https://www.facebook.com/nguyen.nhat.hao.362549?locale=vi_VN',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '@dev_hao',
    href: '#',
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Get In Touch
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded" />
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities. Whether you have 
            a question or just want to say hello, feel free to reach out.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 p-6 smooth-transition hover:border-accent hover:bg-secondary dark:bg-primary/5 dark:hover:shadow-accent/10"
                >
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="text-foreground font-semibold">
                      {method.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 rounded-lg border-2 border-accent/30 bg-accent/5 p-6 dark:bg-accent/10">
            <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Based in Vietnam</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Available for remote work and collaboration worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
