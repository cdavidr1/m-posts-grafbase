import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import "./globals.css"
import ConnectWeb3 from "@/components/ConnectWeb3"

export const metadata = {
  title: 'Blog Site',
  description: 'Basic blog w/ web3',
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
          <ConnectWeb3 />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
