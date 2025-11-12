import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageProgress from "@/components/PageProgress";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "گالری هنری شهرزاد",
  description: "گالری هنری شهرزاد - آینانتیک، دکوری، ظروف سرامیکی، شمع ارگانیک و پاپیه ماشه",
  icons: {
    icon: '/photo_2025-09-06_06-38-01.jpg',
    apple: '/photo_2025-09-06_06-38-01.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
