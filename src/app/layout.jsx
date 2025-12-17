import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientComponents from "@/components/ClientComponents";
import Image from "next/image";
import AdminEditToolbar from "@/components/AdminEditToolbar";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "گالری هنری شهرزاد | آینانتیک، دکوری، ظروف سرامیکی و شمع ارگانیک",
  description: "گالری هنری شهرزاد - ارائه محصولات هنری دست‌ساز شامل آینانتیک، دکوری، ظروف سرامیکی، شمع ارگانیک و پاپیه ماشه. هر محصول منحصر به فرد و با کیفیت بالا #گالری_هنری_شهرزاد #آینانتیک #دکوری #ظروف_سرامیکی #شمع_ارگانیک #پاپیه_ماشه #هنر_دست‌ساز #دکوراسیون",
  keywords: "گالری هنری شهرزاد, آینانتیک, دکوری, ظروف سرامیکی, شمع ارگانیک, پاپیه ماشه, هنر دست‌ساز, دکوراسیون, محصولات هنری, #گالری_هنری_شهرزاد, #آینانتیک, #دکوری, #ظروف_سرامیکی, #شمع_ارگانیک, #پاپیه_ماشه, #هنر_دست‌ساز, #دکوراسیون, #محصولات_هنری, #هنر_ایرانی",
  authors: [{ name: "گالری هنری شهرزاد" }],
  openGraph: {
    title: "گالری هنری شهرزاد | آینانتیک، دکوری، ظروف سرامیکی و شمع ارگانیک",
    description: "گالری هنری شهرزاد - ارائه محصولات هنری دست‌ساز شامل آینانتیک، دکوری، ظروف سرامیکی، شمع ارگانیک و پاپیه ماشه",
    type: "website",
    locale: "fa_IR",
    siteName: "گالری هنری شهرزاد",
  },
  twitter: {
    card: "summary_large_image",
    title: "گالری هنری شهرزاد",
    description: "گالری هنری شهرزاد - محصولات هنری دست‌ساز",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/photo_2025-09-06_06-38-01.jpg', type: 'image/jpeg', sizes: 'any' },
    ],
    apple: [
      { url: '/photo_2025-09-06_06-38-01.jpg', type: 'image/jpeg', sizes: '180x180' },
    ],
    shortcut: [
      { url: '/photo_2025-09-06_06-38-01.jpg', type: 'image/jpeg' },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
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
        <AdminEditToolbar />
        <main className="min-h-screen m-0 p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
