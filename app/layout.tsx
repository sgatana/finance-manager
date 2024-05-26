import type { Metadata } from 'next';
import { IBM_Plex_Sans_Condensed, } from 'next/font/google';
import './globals.css';
import SheetProvider from './providers/sheet-provider';
import { Toaster } from '@/components/ui/sonner';

const ibm = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400']
})

export const metadata: Metadata = {
  title: 'Finance Manager',
  description:
    'Manage your expenses and income with ease by using our Finance Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ibm.className}>
        <SheetProvider />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
