import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">

      {/* ================= NAVBAR ================= */}


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
              Department of Mechatronics Engineering
            </div>

            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Engineering the
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent Future.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore mechanical systems, electronics, robotics, automation,
              control systems and programming at Wollo University.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:from-cyan-400 hover:to-blue-500">
                Explore Department
              </button>

              <a
                href="/project"
                className="inline-block rounded-xl border border-cyan-300/20 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
              >
                View Student Projects
              </a>

            </div>

            {/* Small stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">

              <div className="rounded-2xl border border-cyan-300/20 bg-white/[0.07] p-4 backdrop-blur transition hover:border-cyan-400/50 hover:bg-white/[0.10]">
                <p className="text-2xl font-bold text-cyan-300">4+</p>
                <p className="mt-1 text-xs text-slate-300">
                  Engineering Areas
                </p>
              </div>

              <div className="rounded-2xl border border-blue-300/20 bg-white/[0.07] p-4 backdrop-blur transition hover:border-blue-400/50 hover:bg-white/[0.10]">
                <p className="text-2xl font-bold text-blue-300">20+</p>
                <p className="mt-1 text-xs text-slate-300">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-purple-300/20 bg-white/[0.07] p-4 backdrop-blur transition hover:border-purple-400/50 hover:bg-white/[0.10]">
                <p className="text-2xl font-bold text-yellow-300">∞</p>
                <p className="mt-1 text-xs text-slate-300">
                  Possibilities
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT - YOUR IMAGE */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-900/80 p-2 shadow-2xl shadow-cyan-500/10">

              <video
                src="/videos/Ai.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= DASHBOARD ================= */}


      {/* ================= DEPARTMENT INTRO ================= */}
      <section className="relative overflow-hidden border-y border-cyan-300/10 bg-blue-950/40">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About Mechatronics
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Where Engineering Meets Intelligence
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Mechatronics Engineering combines mechanical engineering, electronics,
              programming, control systems and automation to develop intelligent
              machines and modern engineering solutions.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-cyan-300/20 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.10]">

              <div className="text-3xl">⚙️</div>

              <h3 className="mt-5 text-xl font-bold">
                Practical Engineering
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Develop practical skills by combining mechanical, electrical and
                software technologies to solve real engineering problems.
              </p>

            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.10]">

              <div className="text-3xl">🤖</div>

              <h3 className="mt-5 text-xl font-bold">
                Intelligent Systems
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Learn how robotics, automation, embedded systems and control
                technologies work together to create intelligent machines.
              </p>

            </div>

            <div className="rounded-2xl border border-purple-300/20 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.10]">

              <div className="text-3xl">💡</div>

              <h3 className="mt-5 text-xl font-bold">
                Innovation & Creativity
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Encourage students to design innovative solutions and transform
                engineering ideas into practical projects.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= PROGRAMS ================= */}
      <section
        id="programs"
        className="border-y border-cyan-300/10 bg-slate-950/50"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              What We Study
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Core Areas of Mechatronics
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <AreaCard
              icon="⚙️"
              title="Mechanical Systems"
              text="Design, machines, CAD and mechanical engineering."
            />

            <AreaCard
              icon="⚡"
              title="Electronics"
              text="Circuits, embedded systems and electronic devices."
            />

            <AreaCard
              icon="🤖"
              title="Robotics & Automation"
              text="Industrial robots, automation and intelligent machines."
            />

            <AreaCard
              icon="💻"
              title="Programming"
              text="Python, C/C++, MATLAB and software development."
            />

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Innovation
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Student Projects
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Discover practical projects developed by Mechatronics Engineering
            students, combining engineering knowledge, programming, automation,
            electronics and innovative problem-solving.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <ProjectCard
            icon="🤖"
            title="Smart Robot"
            category="Robotics"
            description="A student-developed autonomous robotic system that combines sensors, programming and control techniques to enable intelligent movement and interaction with its environment."
          />

          <ProjectCard
            icon="⚙️"
            title="Industrial Automation"
            category="Automation"
            description="A practical automation project that demonstrates how PLCs, sensors and control systems can be integrated to automate industrial processes and improve efficiency."
          />

          <ProjectCard
            icon="📡"
            title="IoT Monitoring System"
            category="Embedded Systems"
            description="A smart monitoring system that uses sensors and embedded technology to collect and monitor real-time information for practical engineering applications."
          />

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30 p-10 shadow-2xl shadow-blue-500/10 md:p-16">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
              Start Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Build. Automate. Innovate.
            </h2>

            <p className="mt-5 text-slate-200">
              Become part of the next generation of engineers building
              intelligent systems and solving real-world problems.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-50">
              Join Mechatronics →
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}


    </main>
  );
}


/* ================= COMPONENTS ================= */

function AreaCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-blue-950/70">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {text}
      </p>

    </div>
  );
}


function ProjectCard({
  icon,
  title,
  category,
  description,
}: {
  icon: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/80 shadow-xl shadow-blue-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50">

      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-900/70 via-blue-900/60 to-purple-900/70">

        <div className="text-6xl transition duration-300 group-hover:scale-110">
          {icon}
        </div>

      </div>

      <div className="p-6">

        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-300">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {description}
        </p>

        

      </div>

    </div>
  );
}