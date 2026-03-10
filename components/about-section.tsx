export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              About Me
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded" />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a third-year Software Engineering student at Sai Gon University with a strong interest in 
      backend development and full-stack web applications. I have experience building practical 
      systems using technologies such as Spring Boot, React, and MySQL, focusing on RESTful APIs, 
      authentication, and real-time communication.
              </p>
              
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Besides web development, I am actively exploring artificial intelligence, especially natural 
      language processing and transformer-based models. I enjoy experimenting with tools such as 
      Hugging Face and running local LLMs while continuously improving my skills in software 
      engineering, algorithms, and system design.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
