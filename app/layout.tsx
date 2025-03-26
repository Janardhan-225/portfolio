import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Janardhan - Full-Stack Developer',
  description: 'Building Scalable & Interactive Web Applications',
  openGraph: {
    title: 'Janardhan - Full-Stack Developer',
    description: 'Building Scalable & Interactive Web Applications',
    url: 'https://your-portfolio-url.com',
    siteName: 'Janardhan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janardhan - Full-Stack Developer',
    description: 'Building Scalable & Interactive Web Applications',
    creator: '@Janardhan_93',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}