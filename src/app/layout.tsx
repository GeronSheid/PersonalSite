import './globals.css'
import type { Metadata } from 'next'
import {Roboto} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Roboto({ subsets: ['cyrillic', "latin"], weight: ['400', "500", "700"] })

export const metadata: Metadata = {
  title: 'Shneider Frontend | Главная',
  description: 'Сайт-портфолио frontend разработчика.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='flex flex-col h-full'>
          <Header/>
          <main className='flex-grow-1 flex-auto'>
              {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
