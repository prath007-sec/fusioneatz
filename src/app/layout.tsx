import type { Metadata } from "next"
import { Poppins, Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FusionEatz — Bold Mexican Street Food | Springfield, MO",
  description:
    "Authentic Mexican street food at Battlefield Mall in Springfield, MO. Fresh ingredients, bold flavors, made to order. 4.9★ on Google.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Nav />
        {children}
      </body>
    </html>
  )
}
