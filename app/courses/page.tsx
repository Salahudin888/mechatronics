"use client";

import Link from "next/link";
import { useState } from "react";

export default function Courses() {
    const [openModule, setOpenModule] = useState<string | null>(null);

    const modules = [
        {
            title: "General Sciences & Basic Engineering",
            description:
                "Mathematics, physics, engineering fundamentals, drawing, workshop technology and computing.",
            icon: "📐",
            courses: [
                "Mathematics",
                "Physics",
                "Engineering Drawing",
                "Workshop Technology",
                "Engineering Fundamentals",
            ],
        },

        {
            title: "Computer Software & IT",
            description:
                "Programming, MATLAB, algorithms, databases, simulation, CAD/CAM and industrial networks.",
            icon: "💻",
            courses: [
                "Programming",
                "MATLAB",
                "Algorithms",
                "Database Systems",
                "CAD/CAM",
                "Industrial Networks",
            ],
        },

        {
            title: "Mechanics",
            description:
                "Engineering mechanics, strength of materials, thermodynamics, fluid mechanics and machine elements.",
            icon: "⚙️",
            courses: [
                "Engineering Mechanics",
                "Strength of Materials",
                "Thermodynamics",
                "Fluid Mechanics",
                "Machine Elements",
            ],
        },

        {
            title: "Electronics",
            description:
                "Electrical circuits, analog and digital electronics, power electronics, sensors and embedded systems.",
            icon: "⚡",
            courses: [
                "Electrical Circuits",
                "Analog Electronics",
                "Digital Electronics",
                "Power Electronics",
                "Sensors",
                "Embedded Systems",
            ],
        },

        {
            title: "Control & Robotics",
            description:
                "Control systems, PLC, SCADA, robotics, pneumatics, hydraulics and machine vision.",
            icon: "🤖",
            courses: [
                "Control Systems",
                "PLC",
                "SCADA",
                "Introduction to Robotics",
                "Pneumatics and Hydraulics",
                "Machine Vision",
            ],
        },

        {
            title: "Mechatronics Integration",
            description:
                "System design, embedded systems, simulation, smart manufacturing, internship and thesis projects.",
            icon: "🔧",
            courses: [
                "Mechatronics System Design",
                "Applied Embedded Systems",
                "System Simulation",
                "Smart Manufacturing",
                "Industrial Internship",
                "Bachelor Thesis",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">

            {/* ================= HEADER ================= */}
            <section className="bg-gradient-to-br from-white via-blue-50 to-slate-100 px-6 py-20">
                <div className="mx-auto max-w-6xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Academic Program
                    </p>

                    <h1 className="mt-4 text-4xl font-bold md:text-6xl">
                        Mechatronics Courses
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Explore the courses and academic areas that make up the
                        Mechatronics Engineering program.
                    </p>

                </div>
            </section>

            {/* ================= PROGRAM OVERVIEW ================= */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold">
                            Program Overview
                        </h2>

                        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                            The Mechatronics Engineering program combines mechanical,
                            electrical, electronic, computer, control and automation
                            engineering into an integrated multidisciplinary program.
                        </p>
                    </div>

                    {/* ================= PROGRAM STATS ================= */}
                    <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Duration */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Duration
                            </p>

                            <p className="mt-2 text-3xl font-bold text-blue-600">
                                5 Years
                            </p>
                        </div>

                        {/* Semesters */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Semesters
                            </p>

                            <p className="mt-2 text-3xl font-bold text-blue-600">
                                10
                            </p>
                        </div>

                        {/* Credit Hours */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Credit Hours
                            </p>

                            <p className="mt-2 text-3xl font-bold text-blue-600">
                                188
                            </p>
                        </div>

                        {/* ECTS */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                ECTS
                            </p>

                            <p className="mt-2 text-3xl font-bold text-blue-600">
                                ~300
                            </p>
                        </div>

                    </div>

                    {/* ================= ACADEMIC AREAS ================= */}
                    <div>

                        <h2 className="mb-8 text-3xl font-bold">
                            Academic Areas
                        </h2>

                        <div className="grid items-start gap-6 md:grid-cols-2">

                            {modules.map((module) => (

                                <div
                                    key={module.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >

                                    {/* Icon */}
                                    <div className="text-4xl">
                                        {module.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-5 text-xl font-bold">
                                        {module.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 leading-7 text-slate-600">
                                        {module.description}
                                    </p>

                                    {/* Explore Button */}
                                    <button
                                        onClick={() => setOpenModule(module.title)}
                                        className="mt-5 font-semibold text-blue-600 transition hover:text-blue-800"
                                    >
                                        Explore courses →
                                    </button>

                                </div>

                            ))}
                            

                        </div>
                        <div className="mt-12 text-center">
                            <Link
                                href="/courses/curriculum"
                                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                View Full Curriculum →
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          COURSE MODAL
      ===================================================== */}

            {openModule && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-6 backdrop-blur-md"
                    onClick={() => setOpenModule(null)}
                >

                    {/* Modal Card */}
                    <div
                        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/60 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            onClick={() => setOpenModule(null)}
                            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                            aria-label="Close courses"
                        >
                            ×
                        </button>

                        {/* Modal Header */}
                        <div className="pr-12">

                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                                Academic Courses
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                {openModule}
                            </h2>

                            <p className="mt-3 text-slate-500">
                                Courses included in this academic area.
                            </p>

                        </div>

                        {/* Course List */}
                        <div className="mt-8">

                            {modules
                                .find((module) => module.title === openModule)
                                ?.courses.map((course, index) => (

                                    <div
                                        key={course}
                                        className="mb-3 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:border-blue-200 hover:bg-blue-50"
                                    >

                                        {/* Number */}
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                                            {index + 1}
                                        </span>

                                        {/* Course Name */}
                                        <span className="font-medium text-slate-700">
                                            {course}
                                        </span>

                                    </div>

                                ))}

                        </div>

                        {/* Bottom Close Button */}
                        <button
                            onClick={() => setOpenModule(null)}
                            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </main>
    );
}