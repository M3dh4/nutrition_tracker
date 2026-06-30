import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-700 mb-6">We couldn't find that week or recipe.</p>
      <Link href="/" className="underline font-medium text-accentDark">
        Go back home
      </Link>
    </div>
  );
}
