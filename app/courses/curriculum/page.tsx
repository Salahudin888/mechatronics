"use client";

import { useState } from "react";
import { curriculum } from "./data";

const years = [1, 2, 3, 4, 5];

export default function CurriculumPage() {
    const [selectedYear, setSelectedYear] = useState(1);
    const [selectedSemester, setSelectedSemester] = useState(1);

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Mechatronics Engineering Curriculum
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Explore courses by academic year and semester
                    </p>
                </div>

                {/* Year Selection */}
                <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-slate-800">
                        Academic Year
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => {
                                    setSelectedYear(year);
                                    setSelectedSemester(1);
                                }}
                                className={`rounded-lg px-6 py-3 font-medium transition ${selectedYear === year
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-slate-700 shadow hover:bg-blue-50"
                                    }`}
                            >
                                Year {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Semester Selection */}
                <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-slate-800">
                        Semester
                    </h2>

                    <div className="flex gap-3">
                        {[1, 2].map((semester) => (
                            <button
                                key={semester}
                                onClick={() => setSelectedSemester(semester)}
                                className={`rounded-lg px-6 py-3 font-medium transition ${selectedSemester === semester
                                        ? "bg-purple-600 text-white"
                                        : "bg-white text-slate-700 shadow hover:bg-purple-50"
                                    }`}
                            >
                                Semester {semester}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Selected Information */}
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                    <h2 className="mb-2 text-2xl font-bold text-slate-900">
                        Year {selectedYear} — Semester {selectedSemester}
                    </h2>

                    <p className="text-slate-500">
                        Courses for this semester will appear here.
                    </p>
                    
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[700px] border-collapse">
                            <thead>
                                <tr className="border-b bg-slate-100 text-left">
                                    <th className="p-4">Course Code</th>
                                    <th className="p-4">Course Title</th>
                                    <th className="p-4">Credit</th>
                                    <th className="p-4">ECTS</th>
                                    <th className="p-4">Prerequisite</th>
                                </tr>
                            </thead>

                            <tbody>
                                {curriculum[selectedYear][selectedSemester].map((course) => (
                                    <tr
                                        key={course.code}
                                        className="border-b hover:bg-slate-50"
                                    >
                                        <td className="p-4 font-medium text-blue-600">
                                            {course.code}
                                        </td>

                                        <td className="p-4 text-slate-700">
                                            {course.title}
                                        </td>

                                        <td className="p-4 text-slate-700">
                                            {course.credit}
                                        </td>

                                        <td className="p-4 text-slate-700">
                                            {course.ects ?? "-"}
                                        </td>

                                        <td className="p-4 text-slate-500">
                                            {course.prerequisite}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}