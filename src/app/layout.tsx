import QuickLink from "./components/QuickLink";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaLink",
  description: "Generate links for What'sApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6 pt-12 relative`}>
        <QuickLink className=" left-4 top-4" />
        {children}
        <QuickLink className=" right-4 bottom-4" />
      </body>
    </html>
  );
}
