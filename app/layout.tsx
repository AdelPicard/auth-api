import type { Metadata } from 'next'
import './globals.css'
import localfont from 'next/font/local'
import Providers from './providers'

const myfont = localfont({
  src: [
    {
      path: "../fonts/bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/semibold.ttf",
      weight: "600",
      style: "normal"
    }
  ]
})

export const metadata: Metadata = {
  title: 'Picard Auth - Discord Style',
  description: 'Teste de API de autenticação utilizando NextJS, JWT e outros coiso aí...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
