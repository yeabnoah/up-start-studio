import "./globals.css";
import "../styles/grains.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Upstart Studio - Boost your startup",
  description:
    "All-in-one startup solutions—branding, websites, business cards, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black antialiased", inter.variable)}>
        <div className="grain"></div>
        {children}
      </body>
    </html>
  );
}
