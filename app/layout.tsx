import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Kanit } from "next/font/google";
import "./globals.css";

const body = IBM_Plex_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
});

const heading = Kanit({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["500", "700", "800"],
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
      className={`${body.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
