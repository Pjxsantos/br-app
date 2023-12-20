import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './GBC.css'
import './style.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GBC',
  description: 'O verdadeiro barbeiro não escolhe o corte da moda, mas o corte perfeito para você.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Script src="js/jquery-1.9.1.min.js" />
      <Script src="js/script.js" />
    </html>
  )
}
