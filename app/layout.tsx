import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curtis Liu | Maple Portfolio",
  description:
    "A MapleStory-inspired developer portfolio showcasing cloud, software, and infrastructure projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-6xl px-6 pt-10">
          <NavBar />
        </div>

        {children}
      </body>
    </html>
  );
}