import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Support",
  description: "Sistema de gestión de taller",
};

// ...existing code...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-slate-900 text-white p-5">
            <h1 className="text-2xl font-bold mb-8">Green Support</h1>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="rounded p-2 hover:bg-slate-700">Dashboard</Link>
              <Link href="/clientes" className="rounded p-2 hover:bg-slate-700">Clientes</Link>
              <Link href="/equipos" className="rounded p-2 hover:bg-slate-700">Equipos</Link>
              <Link href="/ordenes" className="rounded p-2 hover:bg-slate-700">Órdenes</Link>
            </nav>
          </aside>
          <main className="flex-1 p-8 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}


