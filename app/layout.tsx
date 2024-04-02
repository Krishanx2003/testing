import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import React from "react";
import { Poppins } from 'next/font/google'
import Header from '@/components/project/Header';
import Footer from '@/components/project/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'happen',
  description: 'Your Hub for Exciting Events!',
  icons: {
    icon: '/assets/images/logo.svg'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      
          <body className={poppins.variable}>
          <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
           
       <Footer/>
         </div>
          </body>
   
      </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
