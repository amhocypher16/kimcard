import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '../lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KIMCARD',
  description: 'Modern Cyber Dashboard UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-cyber-gradient min-h-screen flex flex-col justify-between')}> 
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
