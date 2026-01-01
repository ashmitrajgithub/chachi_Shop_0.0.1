import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chachaji's Shop - Find Trusted Local Services Near You",
  description:
    "Connect with verified electricians, plumbers, and local service providers. Fast, reliable, and trusted by your community.",
  generator: "v0.app",

  icons: {
    icon: [
      { url: "/fevicon%20images/favicon.ico" },          // Default
      { url: "/fevicon%20images/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/fevicon%20images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/fevicon%20images/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/fevicon%20images/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/fevicon%20images/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/fevicon%20images/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],

    apple: [
      { url: "/fevicon%20images/favicon-128.png", sizes: "128x128" },
      { url: "/fevicon%20images/favicon-256.png", sizes: "256x256" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
