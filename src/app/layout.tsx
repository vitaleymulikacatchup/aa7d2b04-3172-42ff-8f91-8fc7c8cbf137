import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'QuantumFrame Photography',
  description: 'Showcase the photographer's work...',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <body 
        className={`${interTight.variable} antialiased`} 
        style={{ background: 'linear-gradient(90deg, rgba(0,229,255,.15), rgba(124,92,255,.1))' }}>
        <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}