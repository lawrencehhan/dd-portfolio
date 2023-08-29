import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Ovo } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})
const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ovo'
})

// const ovo = Ovo({
//   variable: '--font-ovo'
// })

export const metadata: Metadata = {
  title: 'Danielle Dacanay Portfolio',
  description: 'Web-portfolio containing the work and experience of Danielle Dacanay.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas+Neue">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Vazirmatn:400,200,100"></link> */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${montserrat.variable} ${ovo.variable}`}>{children}</body>
    </html>
  )
}
