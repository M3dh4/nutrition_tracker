import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Diabetes & BP Nutrition Tracker",
  description: "A 12-week meal and nutrition tracker for managing Diabetes and High Blood Pressure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <header className="border-b-4 border-ink">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
            <Link href="/" className="text-xl font-bold underline-offset-4 hover:underline">
              Nutrition Tracker
            </Link>
            <nav className="flex gap-4 text-base">
              <Link href="/" className="underline hover:no-underline font-medium">
                Home
              </Link>
              <Link href="/checklist" className="underline hover:no-underline font-medium">
                Checklist &amp; Help
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
        <footer className="max-w-4xl mx-auto px-4 py-8 text-sm text-gray-600 border-t border-border mt-10">
          This app supports, but does not replace, advice from your doctor or dietitian. Always follow your
          prescribed medication and monitoring schedule.
        </footer>
      </body>
    </html>
  );
}
