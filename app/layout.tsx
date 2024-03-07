import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'KoinX | %s',
    default: 'KoinX',
  },
  description:
    'KoinX is a cutting-edge financial technology company specializing in providing a platform for calculating taxes for cryptocurrency investors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
