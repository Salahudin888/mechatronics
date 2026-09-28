export default function ProgramObjectives() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 px-6 py-16">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <section className="mb-14 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                        Mechatronics Engineering
                    </p>

                    <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                        Program Objectives
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        The goals and professional outcomes that guide the
                        Mechatronics Engineering program.
                    </p>
                </section>

                {/* General Objective */}
                <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:p-12">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-3xl">
                        🎓
                    </div>

                    <h2 className="mb-5 text-3xl font-bold">
                        General Objective
                    </h2>

                    <p className="max-w-4xl leading-8 text-slate-300">
                        The overall objective of the Mechatronics Engineering
                        undergraduate program is to produce practice-oriented,
                        competitive Mechatronics Engineers with advanced knowledge
                        and hands-on skills, capable of integrating theory with
                        application to meet industry and societal needs.
                    </p>

                </section>

                {/* Specific Objectives */}
                <section className="mb-10 rounded-3xl bg-white p-8 shadow-xl md:p-12">

                    <h2 className="mb-8 text-3xl font-bold text-slate-900">
                        Specific Objectives
                    </h2>

                    <div className="grid gap-5 md:grid-cols-2">

                        {[
                            "Provide graduates with interdisciplinary expertise in mechanical, electrical, electronics, control, and computing systems for designing innovative automated solutions.",

                            "Train graduates to identify, analyze, and solve industrial problems using modern engineering practices and tools.",

                            "Foster innovation, adaptability, and adoption of emerging technologies to advance industry and society.",

                            "Develop teamwork, leadership, and communication skills for effective multidisciplinary collaboration.",

                            "Prepare ethically responsible engineers who deliver sustainable solutions to societal challenges.",

                            "Build a strong foundation in scientific and engineering principles to support advanced studies, applied research, and lifelong learning.",
                        ].map((objective, index) => (

                            <div
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700 group-hover:bg-purple-600 group-hover:text-white">
                                    {index + 1}
                                </div>

                                <p className="leading-7 text-slate-600">
                                    {objective}
                                </p>
                            </div>

                        ))}

                    </div>

                </section>

                {/* PEO */}
                <section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">

                    <div className="mb-10">
                        <p className="font-semibold uppercase tracking-wider text-purple-600">
                            After Graduation
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            Program Educational Objectives
                        </h2>

                        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                            Within 3–5 years of graduation, Mechatronics Engineering
                            graduates are expected to achieve the following objectives.
                        </p>
                    </div>

                    <div className="space-y-5">

                        {[
                            {
                                title: "PEO 1 — Professional Practice",
                                text: "Practice engineering at a professional level in mechatronics-related industries, demonstrating competence in designing, developing, implementing, and maintaining integrated mechanical-electrical-control systems.",
                            },
                            {
                                title: "PEO 2 — Innovation and Advancement",
                                text: "Contribute to technological innovation and engineering advancement through research, product development, entrepreneurship, and continuous improvement in automation, robotics, and intelligent systems.",
                            },
                            {
                                title: "PEO 3 — Leadership and Collaboration",
                                text: "Assume leadership roles in engineering projects and teams, demonstrating effective communication, collaboration, and management skills.",
                            },
                            {
                                title: "PEO 4 — Ethical and Sustainable Practice",
                                text: "Uphold professional ethics, environmental responsibility, and sustainable development principles in engineering practice.",
                            },
                            {
                                title: "PEO 5 — Lifelong Learning",
                                text: "Engage in continuous learning and professional development while staying current with evolving technologies, industry standards, and best practices.",
                            },
                        ].map((peo) => (

                            <div
                                key={peo.title}
                                className="rounded-2xl border-l-4 border-purple-600 bg-slate-50 p-6 transition hover:bg-purple-50"
                            >
                                <h3 className="mb-2 text-xl font-bold text-slate-900">
                                    {peo.title}
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    {peo.text}
                                </p>
                            </div>

                        ))}

                    </div>

                </section>

            </div>
        </main>
    );
}