'use client';
import { ArrowRight } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/3 -top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl dark:bg-accent/5" />
        <div className="absolute -left-1/3 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
      </div>

      <div className="max-w-4xl animate-fade-in">
        <div className="max-w-4xl animate-fade-in">
  <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
      Hi! I'am{" "}
    <TypeAnimation
      sequence={[
         "Nguyen Nhat Hao",
        2000,
        "Coder ",
        2000,
        "Software Engineer ",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="gradient-text"
    />

  </h1>
</div>

        <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building scalable systems and exploring the intersection of backend development and artificial intelligence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground smooth-transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary smooth-transition hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-8">
          <div>
            <p className="text-3xl font-bold text-accent">7+</p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">3+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">3.22</p>
            <p className="text-sm text-muted-foreground">GPA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
