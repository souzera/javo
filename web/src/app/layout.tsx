import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Javo - Help Desk',
  description: 'Abra seu chamado e aguarde a equipe de suporte entrar em contato com você.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
