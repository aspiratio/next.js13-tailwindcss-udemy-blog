import { Suspense } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "./globals.css"
import type { Metadata } from "next"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Next.js13 Blog",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
