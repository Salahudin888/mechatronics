import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}
    

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Department of Mechatronics Engineering
            </div>

            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Engineering the
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Intelligent Future.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore mechanical systems, electronics, robotics, automation,
              control systems and programming at Wollo University.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500">
                Explore Department
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10">
                View Student Projects
              </button>

            </div>

            {/* Small stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-blue-400">4+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Engineering Areas
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-400">20+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-yellow-400">∞</p>
                <p className="mt-1 text-xs text-slate-400">
                  Possibilities
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT - YOUR IMAGE */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl">

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
<section className="relative overflow-hidden border-y border-white/10 bg-slate-900/40">
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-20">
    
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        About Mechatronics
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Where Engineering Meets Intelligence
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
        Mechatronics Engineering combines mechanical engineering, electronics,
        programming, control systems and automation to develop intelligent
        machines and modern engineering solutions.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
        <div className="text-3xl">⚙️</div>
        <h3 className="mt-5 text-xl font-bold">
          Practical Engineering
        </h3>
        <p className="mt-3 leading-7 text-slate-400">
          Develop practical skills by combining mechanical, electrical and
          software technologies to solve real engineering problems.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
        <div className="text-3xl">🤖</div>
        <h3 className="mt-5 text-xl font-bold">
          Intelligent Systems
        </h3>
        <p className="mt-3 leading-7 text-slate-400">
          Learn how robotics, automation, embedded systems and control
          technologies work together to create intelligent machines.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
        <div className="text-3xl">💡</div>
        <h3 className="mt-5 text-xl font-bold">
          Innovation & Creativity
        </h3>
        <p className="mt-3 leading-7 text-slate-400">
          Encourage students to design innovative solutions and transform
          engineering ideas into practical projects.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= PROGRAMS ================= */}
      <section id="programs" className="border-y border-white/10 bg-slate-900/50">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
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
     {/* ================= PROJECTS ================= */}
<section id="projects" className="mx-auto max-w-7xl px-6 py-20">

  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
      Innovation
    </p>

    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
      Student Projects
    </h2>

    <p className="mt-4 text-slate-400 leading-7">
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

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-700/30 to-cyan-500/10 p-10 md:p-16">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Start Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Build. Automate. Innovate.
            </h2>

            <p className="mt-5 text-slate-300">
              Become part of the next generation of engineers building
              intelligent systems and solving real-world problems.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 font-bold text-slate-900 transition hover:bg-slate-200">
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
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-blue-500/40">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
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
  icon:string,
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition hover:-translate-y-1 hover:border-blue-500/30">

      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-900/60 to-slate-900">

        <div className="text-6xl transition group-hover:scale-110">
          {icon}
        </div>

      </div>

      <div className="p-6">

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

        <button className="mt-5 text-sm font-semibold text-blue-400">
          View Project →
        </button>

      </div>

    </div>
  );
}