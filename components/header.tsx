import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm smooth-transition">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="text-lg font-semibold text-foreground">Nguyen Nhat Hao</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-foreground smooth-transition hover:text-accent"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-foreground smooth-transition hover:text-accent"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-foreground smooth-transition hover:text-accent"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground smooth-transition hover:text-accent"
          >
            Contact
          </a>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  )
}
