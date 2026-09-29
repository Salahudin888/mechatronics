import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-tight text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 max-w-md text-gray-500">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3
                     font-medium text-white transition
                     hover:bg-blue-700"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}