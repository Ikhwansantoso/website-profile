import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Tech Developer",
  description: "Professional portfolio showcasing Web, Mobile, Game Dev, and XR skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
