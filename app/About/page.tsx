export default function About() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">

            {/* Hero */}
            <section className="border-b border-slate-200 bg-gradient-to-br from-white via-blue-50 to-slate-100 px-6 py-20">
                <div className="mx-auto max-w-6xl text-center">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        About Mechatronics
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Mechatronic Engineering
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                        The intelligent control of plant, product, or process through
                        the integration of multiple engineering disciplines.
                    </p>

                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-5xl">

                    {/* Introduction */}
                    <div className="mb-16">
                        <h2 className="mb-6 text-3xl font-bold text-slate-900">
                            What is Mechatronic Engineering?
                        </h2>

                        <p className="text-lg leading-8 text-slate-600">
                            Mechatronic Engineering is the intelligent control of plant,
                            product or process. It is a combination of four or five
                            distinct disciplines that work together to create integrated
                            engineering systems.
                        </p>
                    </div>

                    {/* Disciplines */}
                    <div className="mb-20">
                        <h2 className="mb-8 text-3xl font-bold text-slate-900">
                            The Four Core Disciplines
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Mechanical */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                                    ⚙️
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Mechanical Systems
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    The design and understanding of mechanical structures,
                                    machines, mechanisms, and physical systems.
                                </p>
                            </div>

                            {/* Electrical */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                                    ⚡
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Electrical Systems
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Electrical circuits, sensors, motors, power systems,
                                    and electronic components used in modern machines.
                                </p>
                            </div>

                            {/* Control */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                                    🎛️
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Control Systems
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Systems that monitor, regulate, and control machines
                                    and processes to achieve the desired performance.
                                </p>
                            </div>

                            {/* Software */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                                    💻
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Computers / Software Systems
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Programming, computer systems, and software used to
                                    control, monitor, and communicate with engineering systems.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Why Mechatronics */}
                    <div className="mb-20">
                        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-12">

                            <h2 className="text-3xl font-bold text-slate-900">
                                Why Do We Need Mechatronic Engineering?
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                In many industrial design and manufacturing companies,
                                two or more engineers from different disciplines may be
                                needed to work together. If one engineer sees something
                                which affects another engineering discipline, they may
                                need to communicate through their direct manager rather
                                than deal with it directly.
                            </p>

                            <p className="mt-6 leading-8 text-slate-600">
                                The manager may then communicate with the second engineer's
                                manager, and the information is eventually relayed to the
                                second engineer. Obviously, this can become an extremely
                                wasteful process.
                            </p>

                        </div>
                    </div>

                    {/* Breaking Barriers */}
                    <div className="mb-20">
                        <h2 className="mb-6 text-3xl font-bold text-slate-900">
                            Breaking Down Engineering Barriers
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Most of the time, this happens because of a lack of experience
                            and knowledge of the other engineer's area of work.
                            Mechatronic Engineering overcomes this unfamiliarity and
                            breaks down the barriers by allowing people to work in harmony
                            as part of a multidisciplinary engineering team.
                        </p>

                        <p className="mt-6 leading-8 text-slate-600">
                            By bringing different engineering disciplines together,
                            mechatronics helps engineers understand how mechanical,
                            electrical, control, and software systems interact with one
                            another.
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="mb-20">
                        <h2 className="mb-8 text-3xl font-bold text-slate-900">
                            Benefits of Mechatronic Engineering
                        </h2>

                        <div className="grid gap-6 md:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-600">
                                    Saves Time
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Better communication between disciplines reduces
                                    unnecessary delays and improves the engineering process.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-600">
                                    Saves Money
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Integrated engineering reduces inefficient processes
                                    and helps companies develop products more effectively.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-600">
                                    Better Teamwork
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Engineers can work together as a multidisciplinary team,
                                    improving collaboration and job satisfaction.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Figure */}
                    <div>
                        <h2 className="mb-6 text-3xl font-bold text-slate-900">
                            Mechatronics Integration
                        </h2>

                        <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">

                            <div>
                                <div className="mb-4 text-5xl">
                                    ⚙️
                                </div>

                                <p className="text-lg font-semibold text-slate-700">
                                    Figure
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    Add the mechatronics figure here.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}