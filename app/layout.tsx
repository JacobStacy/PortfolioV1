import type { Metadata } from "next";
import "./globals.scss";
import Link from "next/link";
import { openSans, frankRuhlLibre } from '@/app/ui/fonts';
import ProgressBar from "./ui/ProgressBar";

export const metadata: Metadata = {
  title: "Jacob R. Stacy",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    

    <html lang="en">
      <body className={openSans.className}>
        <header id="header">
          <nav>
            <div className="title">
              <Link href="/" className="">
                <span className={`${frankRuhlLibre.className} name`} >Jacob R. Stacy</span>
              </Link>
              <span>SOFTWARE ENGINEER,WEB DEVELOPER</span>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link href="/#about">about, </Link>
                </li>
                <li>
                  <Link href="/">projects, </Link>
                </li>
                <li>
                  <Link href="/">contact</Link>
                </li>
              </ul>
            </div>
            <ProgressBar/>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
