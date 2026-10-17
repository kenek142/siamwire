import type { Metadata } from "next";
import { Noto_Serif_Thai, Playfair_Display } from "next/font/google";
import "./globals.css";

// ตัวอังกฤษใช้ Playfair Display ส่วนตัวไทยตกไปใช้ Noto Serif Thai
const latin = Playfair_Display({
  variable: "--font-latin",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const thai = Noto_Serif_Thai({
  variable: "--font-thai",
  subsets: ["thai"],
});

const title = "Siam Wire | ลวด PC Wire สำหรับงานเสาคอนกรีตและสะพาน";
const description =
  "Siam Wire จำหน่ายลวดอัดแรง PC Wire คุณภาพดี ราคาคุ้มค่า ส่งไว สำหรับโรงงานผลิตเสาคอนกรีตและงานสะพาน ทักไลน์ขอใบเสนอราคาได้ทันที";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Siam Wire",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${latin.variable} ${thai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
