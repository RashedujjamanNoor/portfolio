import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          {/* Logo */}

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-white"
          >
            Noor<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Resume Button */}

          <a
            href="cv.pdf"
            target="_blank"
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 md:block"
          >
            Resume
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white md:hidden"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-4 rounded-3xl border border-white/10 bg-[#0B1120]/95 p-6 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-zinc-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="cv.pdf"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
