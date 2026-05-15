import type { Metadata } from "next";
import { Montserrat, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-montserrat" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "GameBrew Corner — Nongkrong Rakyat, Hiburan Konglomerat",
  description: "Warkop GameBrew Corner — Tempatnya ngopi santai sambil mabar PS di meja masing-masing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${bricolage.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&amp;family=Bricolage+Grotesque:wght@500;600;700&amp;family=Patrick+Hand&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
