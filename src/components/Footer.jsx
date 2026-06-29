import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaArrowUp } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/RashedujjamanNoor",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/md-rashedujjaman-noor-006773262/",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/rashedkhan.rk.96",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-28 pb-8">
      {/* Gradient Line */}
      <div className="mx-auto mb-12 h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            Rashedujjaman{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Noor
            </span>
          </h2>

          <p className="mt-2 text-zinc-400">Full Stack MERN Developer</p>
        </motion.a>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-zinc-400">
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 bg-white/5 p-4 text-xl text-white backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-zinc-500">
          © {year} Rashedujjaman Noor. All Rights Reserved.
        </p>

        {/* Back To Top */}
        <motion.a
          href="#home"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute right-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
        >
          <FaArrowUp />
        </motion.a>
      </div>
    </footer>
  );
}
