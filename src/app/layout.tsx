import QuickLink from "./components/QuickLink";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "Linkerator",
    description: "Generate links for WhatsApp",
    url: "https://linkerator.vercel.app",
    siteName: "Linkerator",
    images: [
      {
        url: "https://linkerator.vercel.app/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6 pt-12 relative min-h-screen`}>
        {children}
        <QuickLink className=" md:right-4 bottom-0 left-0" />
      </body>
    </html>
  );
}
