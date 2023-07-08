import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import "./globals.css"

export const metadata = {
  title: 'Mary\'s Site',
  description: 'Discover the truth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
