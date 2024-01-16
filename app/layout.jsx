import { Roboto_Flex } from 'next/font/google'
import Header from './_components/layout/header/Header'
import './globals.css'
import Footer from './_components/layout/footer/Footer'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"]
})

export const metadata = {
  title: 'ExpresiónGraff',
  description: 'Calculá tu presupuesto para personalizar tus prendas.',
  robots: { index: true, follow: true },
  creator: "diegoui",
  keywords: "estampado, sublimado, bordado, ropa, logos, marca, industrial, personalizado, buzo, remera, pantalon, gorra"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`
      flex flex-col md:overflow-hidden min-h-screen
      ${roboto.className}
      `}>
        <Header />
        <main className="flex w-full max-w-screen-xl mx-auto px-5 flex-[1_0_auto]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
