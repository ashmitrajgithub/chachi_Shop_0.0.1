"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/chachaji-logo-optimized.png"
            alt="Chachaji Shop"
            style={{ height: "56px", width: "auto" }}
            className="
              drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)]
              transition-transform duration-300
              group-hover:-translate-y-1 group-hover:scale-105
            "
          />

          {/* Brand text hidden on very small screens */}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[24px] font-black tracking-tight bg-gradient-to-r from-[#ff6333] to-[#ff8c42] bg-clip-text text-transparent">
              Chachaji
            </span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-muted-foreground uppercase mt-1">
              Local Services
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition">
            Marketplace
          </Link>
          <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition">
            Register
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link onClick={() => setOpen(false)} href="/marketplace">
              Marketplace
            </Link>
            <Link onClick={() => setOpen(false)} href="/register">
              Register
            </Link>
            <Link onClick={() => setOpen(false)} href="/login">
              <Button className="w-full">Login</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
