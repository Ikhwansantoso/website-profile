import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Ikhwan Ma'ruf Santoso | Frontend, Backend & Mobile Developer",
  description:
    "Portfolio of Muhammad Ikhwan Ma'ruf Santoso, Informatics student at ITS who builds websites and Android apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-slate-800 bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
