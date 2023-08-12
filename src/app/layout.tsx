import Navbar from '@/components/layout/Navbar';
import './globals.scss';
import type { Metadata } from 'next';
import Footer from '@/components/layout/footer';
import ReduxProvider from '@/store/provider';

export const metadata: Metadata = {
  title: 'Audiophile App',
  description: 'Order the best earphones devices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
