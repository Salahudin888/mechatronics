import StaffCard from "../components/staffCard";
import { staff } from "../data/staff";

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Mechatronics Department
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Academic Staff
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Meet the dedicated academic and technical staff of the
              Mechatronics Department.
            </p>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </section>

      {/* Staff Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Department Staff
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our department is supported by qualified academic and technical
            professionals dedicated to teaching, research, innovation, and
            student development.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <StaffCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </section>

    </main>
  );
}