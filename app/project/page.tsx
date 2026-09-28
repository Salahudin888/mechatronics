import Link from "next/link";
import { projects } from "./data/projects";

export default function ProjectsPage() {
    // Group projects by year
    const projectsByYear = projects.reduce(
        (groups, project) => {
            if (!groups[project.year]) {
                groups[project.year] = [];
            }

            groups[project.year].push(project);
            return groups;
        },
        {} as Record<string, typeof projects>
    );

    // Sort years from newest to oldest
    const years = Object.keys(projectsByYear).sort(
        (a, b) => Number(b) - Number(a)
    );

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-16">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Student & Department Work
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                        Mechatronics Projects
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Explore projects developed by Mechatronics students
                        and the department throughout different academic years.
                    </p>
                </div>

                {/* Projects by Year */}
                <div className="space-y-20">

                    {years.map((year) => (
                        <section key={year}>

                            {/* Year Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
                                    {year.slice(-2)}
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {year}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {projectsByYear[year].length}{" "}
                                        {projectsByYear[year].length === 1
                                            ? "Project"
                                            : "Projects"}
                                    </p>
                                </div>
                            </div>

                            {/* Line */}
                            <div className="mb-8 h-px bg-slate-200" />

                            {/* Project Cards */}
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                                {projectsByYear[year].map((project) => (
                                    <div
                                        key={project.id}
                                        className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    >

                                        {/* Project Image */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                            {/* Year Badge */}
                                            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-blue-700 shadow backdrop-blur">
                                                {project.year}
                                            </span>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6">

                                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                                {project.title}
                                            </h3>

                                            <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-600">
                                                {project.description}
                                            </p>

                                            {/* Buttons */}
                                            <div className="flex gap-3">

                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                                                >
                                                    View Project
                                                </Link>

                                                <a
                                                    href={project.zipFile}
                                                    download
                                                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                                                >
                                                    ZIP
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>
                    ))}

                </div>

            </div>
        </main>
    );
}

