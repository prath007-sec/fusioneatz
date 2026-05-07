"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ChevronDown,
  Star,
  UtensilsCrossed,
  Heart,
  Flame,
  MapPin,
  Clock,
  Phone,
  Quote,
  ShoppingBag,
  ExternalLink,
  Users,
  ChefHat,
  Leaf,
  Sparkles,
} from "lucide-react"

/* ───── Data ───── */

const menuItems = {
  "Main Entrees": [
    { name: "Plate Combo", price: 14.5, desc: "A hearty meal including your choice of 2 tacos, served with a side of rice and beans." },
    { name: "Classic Burrito", price: 13.5, desc: "A large tortilla packed with your choice of meat, rice, beans, onions, cilantro, and fresh salsa." },
    { name: "Classic Quesadilla", price: 12.5, desc: "A grilled tortilla filled with your choice of meat and melted cheese, topped with onions, cilantro, and salsa." },
    { name: "Loaded Fries", price: 14.25, desc: "A bed of crispy fries topped with your choice of meat, melted cheese, cool sour cream, and salsa." },
  ],
  "Individual Fusion Tacos": [
    { name: "Shrimp Taco", price: 4.75, desc: "Warm corn tortilla filled with seasoned shrimp, onions, tomatoes, and cilantro, drizzled with specialty sauce." },
    { name: "Steak Taco", price: 4.25, desc: "Corn tortilla filled with grilled steak, fresh lettuce, tomatoes, onions, shredded cheese, and cilantro." },
    { name: "Chicken Taco", price: 3.75, desc: "Marinated chicken served in a corn tortilla with fresh onions, tomatoes, cilantro, and spicy fusion sauce." },
    { name: "Pork Taco", price: 3.75, desc: "Tender pork with onions, tomatoes, and cilantro on a warm corn tortilla." },
  ],
  "Kids Menu": [
    { name: "(Kids) Chicken & Rice", price: 7.0, desc: "A kid-sized bowl of marinated chicken and rice, served with a side of fusion sauce." },
    { name: "(Kids) Beef & Rice", price: 7.0, desc: "Taco meat and rice served with a side of fusion sauce." },
    { name: "(Kids) Cheesy Wrap & Rice", price: 8.0, desc: "A simple cheesy wrap served with a side of rice." },
  ],
  Desserts: [
    { name: "Churro Cheesecake", price: 6.5, desc: "A decadent fusion dessert combining creamy cheesecake with the cinnamon-sugar crunch of a churro." },
    { name: "Churro with Ice Cream", price: 5.5, desc: "A warm, sugary churro served alongside a scoop of vanilla ice cream." },
    { name: "Churro (1 pc)", price: 2.5, desc: "A single classic Mexican fried-dough pastry rolled in cinnamon sugar." },
  ],
  Beverages: [
    { name: "Horchata", price: [4.0, 5.5], sizes: ["Small", "Large"], desc: "A traditional sweet, creamy rice milk drink flavored with cinnamon." },
    { name: "Jamaica", price: [4.0, 5.5], sizes: ["Small", "Large"], desc: "A refreshing, tart hibiscus tea." },
    { name: "Mexican Coke", price: 3.5, desc: "Classic Coca-Cola sweetened with cane sugar in a glass bottle." },
    { name: "Jarritos", price: 3.25, desc: "Various flavors of popular Mexican fruit sodas." },
    { name: "Orange Juice", price: 4.0, desc: "100% orange juice." },
    { name: "Canned Soda", price: 2.25, desc: "Assorted varieties." },
    { name: "Bottled Water", price: 2.0, desc: "Pure Life or equivalent." },
  ],
  "A La Carte & Sides": [
    { name: "Chips & Salsa", price: 4.5, desc: "House-made corn chips served with fresh salsa." },
    { name: "Side of Fusion Rice", price: 4.0, desc: "A side portion of seasoned rice." },
    { name: "Side of Beans", price: 3.0, desc: "A side portion of slow-cooked beans." },
    { name: "Extra Side of Meat", price: 7.0, desc: "An additional portion of chicken, beef, or steak." },
  ],
}

const menuCategories = [
  { name: "Main Entrees", icon: Flame },
  { name: "Fusion Tacos", icon: UtensilsCrossed },
  { name: "Kids Menu", icon: Heart },
  { name: "Desserts", icon: Sparkles },
  { name: "Beverages", icon: ShoppingBag },
  { name: "Sides", icon: Leaf },
]

const ratings = [
  { platform: "Google", rating: 4.9, count: "369 reviews", suffix: "★" },
  { platform: "Facebook", rating: 5.0, count: "26 votes", suffix: "/5" },
  { platform: "Grubhub", rating: 4.7, count: "4.7/5", suffix: "" },
  { platform: "Uber Eats", rating: 4.9, count: "100 reviews", suffix: "★" },
]

const reviews = [
  { name: "Anthony McGinnis", rating: 5, text: "Went here with my wife and I. We went during lunch and it wasn't horribly busy. We both got fusion bowls and they were great. Their selection is varied. I loved how you can customize your order. For what you get the pricing is reasonable." },
  { name: "Noah Jay", rating: 5, text: "I was pleasantly surprised by the service and quality of the food here. Would definitely recommend. The only thing I'd do differently is go a bit lighter on the sauce or add it as a side and put it on myself. Overall it was absolutely..." },
  { name: "Wendy Walker", rating: 5, text: "This is one of my favorite places to eat. I love the curry bowl but my favorite thing to order is the fusion wrap with chicken loaded with everything, spicy sauce, and apple chutney. It is a flavor explosion, and grab some napkins because..." },
  { name: "Julie Stan", rating: 5, text: "When we first visited Fusion Eatz a few weeks ago, we were greeted by the most enthusiastic girl at the counter. We let her know that it was our first time there and she offered samples and gave excellent recommendations. We LOVED the food!" },
  { name: "Anna Ella", rating: 5, text: "The chicken curry is my husband's and I favorite thing ever! It's literally the best chicken curry ever! The portions also make two meals for us! So so yummy! If you haven't tried it you should..." },
  { name: "S H", rating: 5, text: "I ordered the chicken tikka bowl. It has amazing taste and the quality of the ingredients is wonderful. After this experience, I will try everything on their menu!" },
]

/* ───── Helpers ───── */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Stars({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  return (
    <div className={`flex gap-0.5 ${size === "md" ? "text-lg" : "text-sm"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? "fill-brand text-brand" : "text-zinc-200"}
          size={size === "md" ? 20 : 14}
        />
      ))}
    </div>
  )
}

function AnimatedStars({ count, size = "md" }: { count: number; size?: "sm" | "md" }) {
  return (
    <div className={`flex gap-0.5 ${size === "md" ? "text-lg" : "text-sm"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Star
            className={i < count ? "fill-brand text-brand" : "text-zinc-200"}
            size={size === "md" ? 20 : 14}
          />
        </motion.div>
      ))}
    </div>
  )
}

/* ───── Circular text ───── */

function CircularText({ text, radiusRatio, fontSize }: { text: string; radiusRatio: number; fontSize: number }) {
  const chars = text.split("")
  const angleStep = 360 / chars.length
  const r = radiusRatio / 100

  return (
    <div className="relative h-full w-full">
      {chars.map((char, i) => {
        const angle = i * angleStep
        const rad = (angle * Math.PI) / 180
        const x = (50 + 50 * r * Math.sin(rad)).toFixed(4)
        const y = (50 - 50 * r * Math.cos(rad)).toFixed(4)

        return (
          <span
            key={i}
            className="absolute font-semibold text-brand select-none"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              fontSize: `${fontSize}px`,
              letterSpacing: "0",
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}

/* ───── Page ───── */

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 text-center">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-background" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <h1 className="font-heading text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Fusion
            <span className="text-brand">Eatz</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-xl">
            Bold Mexican street food crafted fresh daily.
            Hand-pressed tortillas, slow-marinated meats,
            and salsas made from scratch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30"
          >
            View Menu
            <ChevronDown className="h-4 w-4" />
          </a>
          <a
            href="https://www.google.com/search?q=Fusion+Eatz&sca_esv=8639ec9b40ab010a&rlz=1C5CHFA_en&sxsrf=ANbL-n7UDPaLAue4LzEPJvcOeGmHnVyv6A%3A1778167461343&ei=pa78abnfFK7eruEPgOyp6Qc&biw=1710&bih=952&ved=0ahUKEwj5xYn_vaeUAxUurysGHQB2Kn0Q4dUDCBM&uact=5&oq=Fusion+Eatz&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0Z1c2lvbiBFYXR6MgoQIxiABBiKBRgnMhAQLhhDGK8BGMcBGIAEGIoFMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyHxAuGEMYrwEYxwEYgAQYigUYlwUY3AQY3gQY4ATYAQFI7BJQAFjlEHAAeAGQAQGYAegBoAGyDKoBBjAuMTAuMbgBA8gBAPgBAZgCCqAC8QrCAhAQIxjwBRjJAhiABBiKBRgnwgIIEAAYgAQYsQPCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARivAcICBRAuGIAEwgILEC4YgAQYxwEY0QPCAggQLhixAxiABMICDRAAGIAEGIoFGEMYsQPCAg0QLhiABBixAxiDARgKwgILEC4YrwEYxwEYgASYAwDiAwUSATEgQLoGBggBEAEYFJIHBDAuMTCgB9C5AbIHBDAuMTC4B_EKwgcFMC42LjTIBx2ACAE&sclient=gws-wiz-serp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-3.5 font-semibold text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-900"
          >
            <Star className="h-4 w-4 fill-brand text-brand" />
            4.9★ on Google
          </a>
        </motion.div>

        {/* Hero rating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400"
        >
          {ratings.slice(0, 2).map((r) => (
            <span key={r.platform} className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              {r.rating} {r.suffix} on {r.platform}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute z-30"
          style={{ bottom: "clamp(-250px, -56vw, -770px)" }}
        >
          <div className="relative w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px]">
            {/* Curved text ring — spinning */}
            <div className="pointer-events-none animate-slow-spin absolute inset-0 flex items-center justify-center">
              <CircularText
                text="FRESH • BOLD • MEXICAN STREET FOOD • FRESH • BOLD • MEXICAN STREET FOOD •"
                radiusRatio={46}
                fontSize={6}
              />
            </div>

            <Image
              src="/spinningbowl.png"
              alt=""
              width={450}
              height={450}
              className="drop-shadow-lg w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════ HIGHLIGHTS ═══════ */}
      <section className="relative z-10 border-y border-zinc-200/60 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            { icon: Leaf, label: "Fresh Ingredients", desc: "Locally sourced, made from scratch daily" },
            { icon: ChefHat, label: "Family Recipes", desc: "Generations of authentic Mexican flavor" },
            { icon: Users, label: "Made to Order", desc: "Customize every dish your way" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 rounded-xl bg-surface-card p-5 shadow-sm shadow-zinc-200/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                <item.icon className="h-5 w-5 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">{item.label}</h3>
                <p className="mt-0.5 text-sm text-zinc-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ MENU ═══════ */}
      <section id="menu" className="relative z-10 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand">Our Menu</span>
              <h2 className="font-heading mt-3 text-4xl font-black tracking-tight sm:text-5xl text-zinc-900">
                What&rsquo;s on the <span className="text-brand">grill</span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-500">
                Every item made fresh to order. Customize your meal your way.
              </p>
            </div>
          </FadeIn>

          {/* Category quick nav */}
          <FadeIn delay={0.1}>
            <div className="mb-12 flex flex-wrap justify-center gap-2.5">
              {menuCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <a
                    key={cat.name}
                    href={`#cat-${cat.name.replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 transition-all hover:border-brand/40 hover:text-brand"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.name}
                  </a>
                )
              })}
            </div>
          </FadeIn>

          {/* Menu sections */}
          {Object.entries(menuItems).map(([category, items], catIdx) => (
            <FadeIn key={category} delay={catIdx * 0.05}>
              <div id={`cat-${category.replace(/\s+/g, "-")}`} className="mb-14 scroll-mt-28">
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="font-heading text-xl font-bold text-zinc-900">{category}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item: any, i: number) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.35 }}
                      className="group rounded-xl border border-zinc-200 bg-surface-card p-5 shadow-sm shadow-zinc-200/50 transition-all hover:border-zinc-300"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="font-bold text-zinc-900 transition-colors group-hover:text-brand">
                            {item.name}
                          </h4>
                          {item.desc && (
                            <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                              {item.desc}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0 text-right">
                          {Array.isArray(item.price) ? (
                            <div className="space-y-0.5">
                              {item.sizes.map((size: string, si: number) => (
                                <div key={size} className="flex items-center justify-end gap-1.5">
                                  <span className="text-xs text-zinc-400">{size}</span>
                                  <span className="rounded-md bg-brand/10 px-2 py-0.5 text-sm font-bold text-brand">
                                    ${item.price[si].toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="inline-block rounded-md bg-brand/10 px-3 py-1 text-sm font-bold text-brand">
                              ${(item.price as number).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════ REVIEWS ═══════ */}
      <section id="reviews" className="relative z-10 border-t border-zinc-200/60 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand">
                Social Proof
              </span>
              <h2 className="font-heading mt-3 text-4xl font-black tracking-tight sm:text-5xl text-zinc-900">
                The <span className="text-brand">love</span> we get
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-500">
                Don&rsquo;t take our word for it. Here&rsquo;s what the community says.
              </p>
            </div>
          </FadeIn>

          {/* Aggregate ratings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ratings.map((r) => (
              <motion.div
                key={r.platform}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-xl border border-zinc-200 bg-surface-card p-5 text-center shadow-sm shadow-zinc-200/50"
              >
                <div className="text-3xl font-black text-zinc-900">
                  {r.rating}{r.suffix}
                </div>
                <div className="my-3 flex justify-center">
                  <AnimatedStars count={Math.round(r.rating)} size="md" />
                </div>
                <div className="text-sm text-zinc-500">
                  {r.count} on {r.platform}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Individual reviews — horizontal marquee */}
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex gap-4">
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 rounded-xl border border-zinc-200 bg-surface-card p-5 shadow-sm shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-200/60"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">{review.name}</div>
                        <Stars count={review.rating} />
                      </div>
                    </div>
                    <Quote className="h-5 w-5 shrink-0 text-brand/20" />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INFO ═══════ */}
      <section id="info" className="relative z-10 border-t border-zinc-200/60 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand">Visit Us</span>
              <h2 className="font-heading mt-3 text-4xl font-black tracking-tight sm:text-5xl text-zinc-900">
                Come on <span className="text-brand">down</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: ["Battlefield Mall", "2825 S Glenstone Ave", "Springfield, MO 65804"],
                action: "Get Directions",
                href: "https://maps.google.com/?q=Battlefield+Mall+Springfield+MO",
              },
              {
                icon: Clock,
                title: "Hours",
                lines: ["Mon–Thu: 11am – 10pm", "Fri–Sat: 11am – 11pm", "Sun: 11am – 9pm"],
                action: null,
                href: null,
              },
              {
                icon: Phone,
                title: "Contact",
                lines: ["(417) 569-7732", "hello@fusioneatz.com"],
                action: "Call Us",
                href: "tel:+14175697732",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-zinc-200 bg-surface-card p-6 text-center shadow-sm shadow-zinc-200/50">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <item.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-zinc-900">{item.title}</h3>
                  <div className="mt-3 space-y-1 text-sm text-zinc-500">
                    {item.lines.map((line, li) => (
                      <p key={li}>{line}</p>
                    ))}
                  </div>
                  {item.action && item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                    >
                      {item.action}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative z-10 border-t border-zinc-200/60 px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} FusionEatz. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            Located in Battlefield Mall &middot; Springfield, MO
          </p>
        </div>
      </footer>
    </>
  )
}
