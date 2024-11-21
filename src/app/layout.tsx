
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black `} 
      >
        <div className="relative w-full max-h-screen flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
