function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a href="#" className="text-xl font-bold">
            Mfon<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm text-gray-300 transition hover:text-cyan-400">
              Home
            </a>

            <a href="#about" className="text-sm text-gray-300 transition hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="text-sm text-gray-300 transition hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="text-sm text-gray-300 transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="text-sm text-gray-300 transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Software Engineer
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Building
              <span className="block text-cyan-400">
                digital experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              I build modern web applications that combine clean design,
              powerful technology, and great user experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>

            </div>

          </div>


          {/* CODE CARD */}
          <div className="hidden md:block">

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-500/10">

              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>

              </div>

              <div className="p-6 font-mono text-sm leading-8">

                <p className="text-gray-500">
                  // A little about me
                </p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span> = {"{"}
                </p>

                <p className="pl-6">
                  name: <span className="text-green-400">'Mfon Benjamin'</span>,
                </p>

                <p className="pl-6">
                  role: <span className="text-green-400">'Software Engineer'</span>,
                </p>

                <p className="pl-6">
                  passion: <span className="text-green-400">'Programming and developing new applications and ideas'</span>,
                </p>

                <p className="pl-6">
                  profession: <span className="text-orange-400">'Student'</span>
                </p>

                <p>{"}"}</p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Turning ideas into reality.
          </h2>

          <div className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            <p>
              I'm a software engineering student passionate about creating applications
              that solve real problems. I enjoy working across the stack,
              from designing interfaces to building backend systems.
            </p>

            <p className="mt-5">
              I am currently focused on building web apps using modern tools and technologies like React, Node.js, and Tailwind CSS. I always look for new challenges to help me grow as a devoloper.
            </p>
          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="border-y border-white/10 bg-slate-900/40 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            I am fluent in these programming languages and tools
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

            {[
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Next.js",
              "Python",
              "Git",
              "GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-slate-950 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/50"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "AI Shop Manager",
                description:
                  "A modern business management platform for managing products, orders and payments.",
                tech: "React • Node.js • Paystack",
              },
              {
                title: "University Website",
                description:
                  "A modern university website designed to provide students with information and digital services.",
                tech: "React • Tailwind CSS",
              },
              {
                title: "Guesthouse Website",
                description:
                  "A responsive booking-focused website for a hospitality business.",
                tech: "React • Tailwind CSS",
              },
            ].map((project) => (

              <div
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >

                <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-slate-800 text-4xl">
                </div>

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-5 text-sm text-cyan-400">
                  {project.tech}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      
      <section id="contact" className="border-t border-white/10 px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Have an idea, project, or opportunity? I'd love to hear about it.
          </p>

          <a
            href="mfonabasix0@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get In Touch
          </a>

        </div>

      </section>


      
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Mfon. All rights reserved.
          </p>
          

        </div>

      </footer>

    </div>
  )
}

export default App