"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/80 bg-white/95">
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
          <div className="relative h-6 w-6">
            <motion.div
              animate={open ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Menu className="h-6 w-6" />
            </motion.div>
            <motion.div
              animate={open ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <X className="h-6 w-6" />
            </motion.div>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white/98 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-2xl font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+14175697732"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 + links.length * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 rounded-full bg-brand px-10 py-3 text-lg font-semibold text-white shadow-lg shadow-brand/25"
            >
              Order Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
