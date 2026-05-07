"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Info", href: "#info" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="FusionEatz"
            width={52}
            height={52}
            className="rounded-lg"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+14175697732"
          className="hidden rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-hover md:inline-flex"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 p-2 text-zinc-500 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white/98 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+14175697732"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-brand px-10 py-3 text-lg font-semibold text-white shadow-lg shadow-brand/25"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  )
}
