// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

export const metadata = {
  title: "John Nicholson",
  description: "Personal coding portfolio of John Nicholson",
};

// Initialize font at module scope per Next.js requirements
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-background text-textPrimary ${ubuntu.className}`}>
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-ripple animate-ripple" />
        <div className="relative z-10">
          <nav className="flex justify-between items-center p-6 bg-card shadow-md sticky top-0 z-20">
            <h1 className="text-2xl font-bold text-accent">MyPortfolio</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-accent">Home</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
              <Link href="/projects" className="hover:text-accent">Projects</Link>
              <Link href="/resume" className="hover:text-accent">Resume</Link>
              <Link href="/contact" className="hover:text-accent">Contact</Link>
            </div>
          </nav>
          <main className="max-w-4xl mx-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
