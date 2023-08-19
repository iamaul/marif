import type { Metadata } from 'next';

import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'Marif';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Mengupas hikmah ilmu kehidupan pemuda masa kini.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://marif.vercel.app',
    title: 'marif',
    description: 'Mengupas hikmah ilmu kehidupan pemuda masa kini.',
    images: {
      url: 'https://marif.vercel.app/assets/header_logo.png',
      alt: 'Marif',
    },
  },
  twitter: {
    creator: '@marif.theofficial',
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="w-full">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
