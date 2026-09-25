import { Big_Shoulders_Display, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mimtajulnahin.dev"),
  title: "Mimtajul Alam Nahin — CSE Student | Aspiring AI/ML Engineer",
  description:
    "Portfolio of Mimtajul Alam Nahin, a Computer Science & Engineering student at Metropolitan University exploring Artificial Intelligence, Machine Learning, and research.",
  openGraph: {
    title: "Mimtajul Alam Nahin — CSE Student | Aspiring AI/ML Engineer",
    description:
      "CSE student at Metropolitan University exploring AI, Machine Learning and research.",
    type: "website",
    siteName: "Mimtajul Alam Nahin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimtajul Alam Nahin — CSE Student | Aspiring AI/ML Engineer",
    description:
      "CSE student at Metropolitan University exploring AI, Machine Learning and research.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="bg-cream text-charcoal font-sans antialiased selection:bg-teal selection:text-cream">
        {children}
      </body>
    </html>
  );
}
