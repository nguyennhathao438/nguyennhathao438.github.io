export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50 px-4 py-8 sm:px-6 lg:px-8 dark:bg-primary/5">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nguyen Nhat Hao. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
