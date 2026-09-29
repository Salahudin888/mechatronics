export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Department */}
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Mechatronics
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Building the future through robotics, electronics,
                            mechanical systems, programming, and automation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a href="/" className="hover:text-blue-400">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="/courses" className="hover:text-blue-400">
                                    Courses
                                </a>
                            </li>

                            <li>
                                <a href="/projects" className="hover:text-blue-400">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="/about" className="hover:text-blue-400">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="hover:text-blue-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Areas
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>Robotics</li>
                            <li>Electronics</li>
                            <li>Mechanical Systems</li>
                            <li>Programming</li>
                            <li>Automation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Contact
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>📧 mechatronics@wu.edu.et</li>
                            <li>📞 +251 900 000 000</li>
                            <li>📍 Ethiopia</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    © 2026 Mechatronics Department. All rights reserved.
                </div>

            </div>
        </footer>
    );
}