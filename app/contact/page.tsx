import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Mechatronics Department
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Get in touch with the Mechatronics Department for information
            about our programs, students, academic activities, and services.
          </p>

        </div>
      </section>


      {/* =========================
          CONTACT INFORMATION
      ========================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Location */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              📍
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Location
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Wollo University
              <br />
              Mechatronics Department
              <br />
              Ethiopia
            </p>

          </div>


          {/* Phone */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              📞
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Phone
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              +251 9XX XXX XXX
            </p>

          </div>


          {/* Email */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              ✉️
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Email
            </h2>

            <p className="mt-2 break-all text-sm text-gray-600">
              mechatronics@wku.edu.et
            </p>

          </div>


          {/* Office Hours */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              🕐
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Office Hours
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Monday – Friday
              <br />
              8:30 AM – 5:30 PM
            </p>

          </div>

        </div>


        {/* =========================
            CONTACT FORM + STAFF
        ========================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-600">
              Have a question? Send a message to the department.
            </p>


            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>


          {/* Staff Section */}
          <div className="flex flex-col justify-center rounded-2xl bg-slate-900 p-8 text-white lg:p-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Academic Staff
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Meet Our Staff
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Get to know the academic and technical staff of the
              Mechatronics Department and find their professional
              contact information.
            </p>

            <div className="mt-8">

              <Link
                href="/staff"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-50"
              >
                Meet Our Staff
                <span className="ml-2">→</span>
              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            SOCIAL MEDIA
        ========================= */}
        <section className="mt-20">

          {/* Section Heading */}
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Connect With Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Follow Our Department
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Stay connected with the Mechatronics Department through
              our official social media platforms.
            </p>

          </div>


          {/* Social Media Cards */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">


            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
                ▶
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                YouTube
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Watch our department videos
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-red-600">
                Visit Channel →
              </span>

            </a>


            {/* Telegram */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                ✈
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Telegram
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Join our official Telegram channel
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                Join Channel →
              </span>

            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                in
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Connect with our department
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                Visit LinkedIn →
              </span>

            </a>

          </div>

        </section>

      </section>

    </main>
  );
}