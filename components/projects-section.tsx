import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
  title: 'Hotel Booking Management System',
  description: 'A web-based hotel booking management system that allows administrators to manage rooms, reservations, and customer information. The system provides features for booking rooms, managing availability, and handling user authentication.',
  technologies: ['SpringBoot', 'MySQL', 'React', 'Tailwincss', 'JavaScript'],
  links: {
    github: 'https://github.com/nguyennhathao438/hotel-booking-management',
    live: '#',
  },
},
  {
  title: 'Fitness App',
  description: 'A web-based fitness application that helps users track workouts, calculate BMI, and manage daily nutrition and exercise data through an interactive interface.',
  technologies: [
    'JavaScript',
    'Laravel',
    'Python',
    'MySql',
    'Tailwincss',
    'React'
  ],
  links: {
    github: 'https://github.com/nguyennhathao438/Fitness-app',
    live: '#',
  },
},
  {
  title: 'Library Management System',
  description: 'A desktop-based library management system for managing books, readers, and borrowing records with features such as book inventory management, loan tracking, and database integration.',
  technologies: [
    'Java',
    'Java Swing',
    'SQL Server',
    'JDBC',
    'CSS'
  ],
  links: {
    github: 'https://github.com/nguyennhathao438/QLThuVien',
    live: '#',
  },
},
{
  title: 'GPS Location Tracking Mobile App',
  description: 'An Android mobile application that retrieves and displays real-time GPS location data using the device’s location services. The app demonstrates location tracking and coordinate visualization.',
  technologies: [
    'Java',
    'Android Studio',
    'GPS',
  ],
  links: {
    github: 'https://github.com/nguyennhathao438/demo_gps_app',
    live: '#',
  },
}
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Featured Projects
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-lg border border-border bg-secondary/50 p-6 smooth-transition hover:border-accent hover:shadow-lg dark:bg-primary/5 dark:hover:shadow-accent/10"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground smooth-transition hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.links.live}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground smooth-transition hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
