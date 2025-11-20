import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: "FarmaClin - Revisão de Farmacoterapia",
  description: "A high-conversion landing page for the FarmaClin pharmaceutical review platform, designed to collect leads from patients and pharmacists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
