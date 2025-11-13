import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientComponents from "@/components/ClientComponents";
import Image from "next/image";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "گالری هنری شهرزاد",
  description: "گالری هنری شهرزاد - آینانتیک، دکوری، ظروف سرامیکی، شمع ارگانیک و پاپیه ماشه",
  icons: {
    icon: [
      { url: '/photo_2025-09-06_06-38-01.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/photo_2025-09-06_06-38-01.jpg', type: 'image/jpeg' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} antialiased`}
      >
        <ClientComponents />
        <Header />
        {/* Hero Image */}
        <section id="banner-section" className="relative w-full m-0 p-0 -mt-[100px] sm:-mt-20">
          <div
            id="banner-image"
            className="relative w-full h-auto md:h-[800px] m-0 p-0"
          >
            <Image
              src="/photo_2025-09-06_06-37-29.jpg"
              alt="گالری هنری شهرزاد"
              width={1280}
              height={800}
              className="w-full h-auto md:h-[800px] object-cover m-0 p-0"
              sizes="100vw"
              priority
            />
          </div>
        </section>
        <main className="min-h-screen m-0 p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
