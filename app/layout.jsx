import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PromptHub",
  description:
    "A community-driven platform where you can explore, rate, and share the most effective AI prompts. Whether you are writing, coding, designing, or brainstorming, find the perfect prompt to unlock AI's full potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
