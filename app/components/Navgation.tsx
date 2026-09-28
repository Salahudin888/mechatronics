"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenus = () => {
        setAboutOpen(false);
        setMobileOpen(false);
    };

    return (
        <nav className="relative z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl md:sticky md:top-0">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    onClick={closeMenus}
                    className="text-xl font-bold tracking-tight"
                >
                    WOLLO{" "}
                    <span className="text-blue-400">
                        MECHATRONICS
                    </span>

                    <p className="text-xs font-normal text-slate-400">
                        Kiot-Kombolcha Institute of Technology
                    </p>
                </Link>


                {/* ================= DESKTOP NAVIGATION ================= */}
                <ul className="hidden items-center gap-8 md:flex">

                    {/* Home */}
                    <li>
                        <Link
                            href="/"
                            onClick={closeMenus}
                            className="text-sm text-white transition hover:text-blue-400"
                        >
                            Home
                        </Link>
                    </li>


                    {/* ================= DESKTOP ABOUT ================= */}
                    <li className="group relative flex items-center gap-1">

                        <Link
                            href="/About"
                            onClick={closeMenus}
                            className="text-sm text-slate-300 transition hover:text-blue-400"
                        >
                            About
                        </Link>

                        <span className="flex h-6 w-6 items-center justify-center text-[10px] text-slate-400 transition group-hover:text-blue-400">
                            ▼
                        </span>


                        {/* Desktop Dropdown */}
                        <div className="invisible absolute left-0 top-full z-[100] w-56 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">

                            <div className="rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl">

                                <Link
                                    href="/About/program"
                                    className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                                >
                                    About the Program
                                </Link>

                                <Link
                                    href="/About/objective"
                                    className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                                >
                                    Program Objectives
                                </Link>

                            </div>

                        </div>

                    </li>


                    {/* Courses */}
                    <li>
                        <Link
                            href="/courses"
                            onClick={closeMenus}
                            className="text-sm text-slate-300 transition hover:text-blue-400"
                        >
                            Courses
                        </Link>
                    </li>


                    {/* Projects */}
                    <li>
                        <Link
                            href="/project"
                            onClick={closeMenus}
                            className="text-sm text-slate-300 transition hover:text-blue-400"
                        >
                            Projects
                        </Link>
                    </li>


                    {/* Contact */}
                    <li>
                        <Link
                            href="/contact"
                            onClick={closeMenus}
                            className="text-sm text-slate-300 transition hover:text-blue-400"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>


                {/* ================= DESKTOP STUDENT PORTAL ================= */}
                <button
                    className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500 md:block"
                >
                    Student Portal
                </button>


                {/* ================= MOBILE HAMBURGER ================= */}
                <button
                    type="button"
                    onClick={() => {
                        setMobileOpen((prev) => !prev);
                        setAboutOpen(false);
                    }}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xl text-slate-200 transition hover:bg-white/10 md:hidden"
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? "✕" : "☰"}
                </button>

            </div>


            {/* ================= MOBILE NAVIGATION ================= */}
            {mobileOpen && (
                <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">

                    <div className="flex flex-col gap-2">

                        {/* Mobile Home */}
                        <Link
                            href="/"
                            onClick={closeMenus}
                            className="rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                        >
                            Home
                        </Link>


                        {/* ================= MOBILE ABOUT ================= */}
                        <div>

                            {/* About + Arrow */}
                            <div className="flex items-center justify-between">

                                <Link
                                    href="/About"
                                    onClick={closeMenus}
                                    className="flex-1 rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                                >
                                    About
                                </Link>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setAboutOpen((prev) => !prev)
                                    }
                                    className="px-4 py-3 text-xs text-slate-400 transition hover:text-blue-400"
                                    aria-label="Toggle About menu"
                                    aria-expanded={aboutOpen}
                                >
                                    {aboutOpen ? "▲" : "▼"}
                                </button>

                            </div>


                            {/* Mobile About Dropdown */}
                            {aboutOpen && (
                                <div className="ml-4 border-l border-white/10 pl-2">

                                    <Link
                                        href="/About/program"
                                        onClick={closeMenus}
                                        className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-blue-400"
                                    >
                                        About the Program
                                    </Link>

                                    <Link
                                        href="/About/objective"
                                        onClick={closeMenus}
                                        className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-blue-400"
                                    >
                                        Program Objectives
                                    </Link>

                                </div>
                            )}

                        </div>


                        {/* Mobile Courses */}
                        <Link
                            href="/courses"
                            onClick={closeMenus}
                            className="rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                        >
                            Courses
                        </Link>


                        {/* Mobile Projects */}
                        <Link
                            href="/project"
                            onClick={closeMenus}
                            className="rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                        >
                            Projects
                        </Link>


                        {/* Mobile Contact */}
                        <Link
                            href="/contact"
                            onClick={closeMenus}
                            className="rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                        >
                            Contact
                        </Link>


                        {/* Mobile Student Portal */}
                        <button
                            className="mt-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                        >
                            Student Portal
                        </button>

                    </div>

                </div>
            )}

        </nav>
    );
}