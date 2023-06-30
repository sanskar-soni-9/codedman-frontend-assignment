import { Inter } from "next/font/google";

import { Header } from "./components/Header";
import { Providers } from "@/redux/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codedamn Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " px-10 pt-5"}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
