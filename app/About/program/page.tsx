export default function AboutProgram() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-16">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <section className="mb-14 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                        Mechatronics Engineering
                    </p>

                    <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                        About the Program
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        A practice-oriented engineering program combining mechanical,
                        electrical, electronics, control, and computing systems.
                    </p>
                </section>

                {/* Main Description */}
                <section className="mb-10 rounded-3xl bg-white p-8 shadow-xl md:p-12">
                    <h2 className="mb-5 text-3xl font-bold text-slate-900">
                        Mechatronics Engineering
                    </h2>

                    <p className="leading-8 text-slate-600">
                        The Mechatronics Engineering program is designed to produce
                        practice-oriented and competitive engineers with advanced
                        knowledge and hands-on skills. The program integrates
                        engineering theory with practical applications to address
                        industrial and societal needs.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Students develop interdisciplinary expertise in mechanical,
                        electrical, electronics, control, and computing systems,
                        enabling them to design and develop innovative automated
                        solutions.
                    </p>
                </section>

                {/* Vision & Mission */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Vision */}
                    <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                            🎯
                        </div>

                        <h2 className="mb-4 text-2xl font-bold">
                            Vision
                        </h2>

                        <p className="leading-8 text-slate-300">
                            To be a center of excellence producing practice-oriented
                            Mechatronics Engineers who drive innovation, industry
                            transformation, and sustainable development through
                            quality, application-focused education.
                        </p>
                    </section>

                    {/* Mission */}
                    <section className="rounded-3xl bg-white p-8 shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                            🚀
                        </div>

                        <h2 className="mb-4 text-2xl font-bold text-slate-900">
                            Mission
                        </h2>

                        <ul className="space-y-4 text-slate-600">
                            <li>
                                ✓ Deliver integrated, practice-oriented education
                                that bridges theory and industrial application.
                            </li>

                            <li>
                                ✓ Equip students with interdisciplinary expertise
                                in mechanical, electrical, electronic, and
                                computing systems.
                            </li>

                            <li>
                                ✓ Foster innovation, entrepreneurship, teamwork,
                                and lifelong learning.
                            </li>

                            <li>
                                ✓ Prepare ethically responsible engineers who
                                contribute to industrial growth and sustainability.
                            </li>
                        </ul>
                    </section>

                </div>

                {/* Areas */}
                <section className="mt-10 rounded-3xl bg-white p-8 shadow-xl md:p-12">

                    <h2 className="text-center text-3xl font-bold text-slate-900">
                        Areas of Study
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
                        The program brings together several engineering disciplines
                        to develop modern automated and intelligent systems.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            "Mechanical Engineering",
                            "Electrical & Electronics",
                            "Control Systems",
                            "Computer Programming",
                            "Automation",
                            "Robotics",
                            "Embedded Systems",
                            "Artificial Intelligence",
                            "Industrial Systems",
                        ].map((area) => (
                            <div
                                key={area}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                            >
                                {area}
                            </div>
                        ))}

                    </div>
                </section>

            </div>
        </main>
    );
}