import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Header() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        {/* ================= Left Content ================= */}

        <motion.div
          className="order-2 text-center lg:order-1 lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-base font-medium text-cyan-400 md:text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Rashedujjaman
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Noor
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-zinc-300 sm:text-2xl md:text-3xl">
            Full Stack MERN Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base lg:mx-0">
            I build modern, responsive and scalable web applications using the
            MERN stack. Passionate about clean architecture, beautiful UI, and
            creating smooth user experiences with modern web technologies.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
            >
              View Projects
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-white transition hover:border-cyan-400 hover:bg-white/5"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Social */}

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/rashedkhan.rk.96",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/md-rashedujjaman-noor-006773262/",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/RashedujjamanNoor",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/10 bg-white/5 p-4 text-xl text-white backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================= Right Image ================= */}

        <motion.div
          className="relative order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow */}

          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />

          {/* Image */}

          <div className="relative rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-1">
            <div className="rounded-full bg-[#050816] p-2 md:p-3">
              <img
                src="/Noor.png"
                alt="Rashedujjaman Noor"
                className="h-60 w-60 rounded-full object-cover object-top sm:h-72 sm:w-72 md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]"
              />
            </div>
          </div>

          {/* Floating Badge */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -left-8 top-20 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl xl:block"
          >
            💻 MERN Stack
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute bottom-10 -right-5 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl xl:block"
          >
            🚀 Open to Work
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
