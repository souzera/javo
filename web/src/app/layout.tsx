import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin']})

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
        <body className={montserrat.className}>
          {children}
        </body>
      </html>
  )
}
