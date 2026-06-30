import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Diabetes & BP Nutrition Tracker",
  description: "A 12-week meal and nutrition tracker for managing Diabetes and High Blood Pressure.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased text-[16px] font-sans">
        <header className="sticky top-0 z-10 bg-paper/90 backdrop-blur border-b border-border">
          <div className="max-w-lg mx-auto px-4 py-3.5 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight text-ink">
              🌿 Nutrition Tracker
            </Link>
            <Link
              href="/checklist"
              className="text-sm font-semibold bg-accentSoft text-accentDark px-3.5 py-1.5 rounded-full active:bg-accent/30"
            >
              Help
            </Link>
          </div>
        </header>
        <main className="max-w-lg mx-auto px-4 py-5 pb-10">{children}</main>
        <footer className="max-w-lg mx-auto px-4 py-6 text-xs text-gray-400 border-t border-border mt-8">
          This app supports, but does not replace, advice from your doctor or dietitian. Always follow your
          prescribed medication and monitoring schedule.
        </footer>
      </body>
    </html>
  );
}
