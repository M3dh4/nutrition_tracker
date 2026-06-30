import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Diabetes & BP Nutrition Tracker",
  description: "A 12-week meal and nutrition tracker for managing Diabetes and High Blood Pressure.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased text-[16px]">
        <header className="border-b-4 border-ink sticky top-0 bg-paper z-10">
          <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold">
              Nutrition Tracker
            </Link>
            <Link
              href="/checklist"
              className="text-sm font-semibold underline text-accentDark"
            >
              Help
            </Link>
          </div>
        </header>
        <main className="max-w-lg mx-auto px-4 py-5 pb-10">{children}</main>
        <footer className="max-w-lg mx-auto px-4 py-6 text-xs text-gray-600 border-t border-border mt-8">
          This app supports, but does not replace, advice from your doctor or dietitian. Always follow your
          prescribed medication and monitoring schedule.
        </footer>
      </body>
    </html>
  );
}