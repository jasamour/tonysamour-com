import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = process.env.SITE_URL || 'https://tonysamour.com';
const siteTitle = process.env.SITE_TITLE || 'Tony Samour – Freelance Web / Tech Consultant';
const siteDescription = process.env.SITE_DESCRIPTION || 'Freelance web consulting and implementation: website builds, updates, accessibility improvements, and light automations for small businesses and nonprofits.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#faf8f6] text-[#1a1a1a]">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
