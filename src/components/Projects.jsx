import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image: "bloom.png",
    title: "Bloom",
    subtitle: "Full Stack MERN E-Commerce",
    featured: true,
    description:
      "A modern full-stack e-commerce platform featuring JWT authentication, Redux Toolkit state management, Firebase authentication, product filtering, shopping cart, secure checkout, order management, and a complete admin dashboard. Built with scalability, responsiveness, and performance in mind.",
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    live: "https://bloom-seven-alpha.vercel.app/",
    github: "https://github.com/RashedujjamanNoor/bloom",
  },

  {
    id: 2,
    image: "doctorbari.png",
    title: "DoctorBari",
    subtitle: "Healthcare Appointment Platform",
    description:
      "A responsive doctor appointment booking platform allowing patients to search doctors by specialty, location, and availability while providing an intuitive scheduling experience.",
    tech: ["React", "Tailwind CSS"],
    live: "https://doctorbari.vercel.app/",
    github: "https://github.com/RashedujjamanNoor/doctorbari-client",
  },

  {
    id: 3,
    image: "e-Food.png",
    title: "E-Food",
    subtitle: "Food Ordering Platform",
    description:
      "A food ordering application powered by third-party APIs with Redux state management, shopping cart functionality, restaurant listings, and responsive UI.",
    tech: ["React", "Redux", "Tailwind CSS"],
    live: "https://efood-omega-six.vercel.app/",
    github: "https://github.com/RashedujjamanNoor/simple-ecommerce-website",
  },

  {
    id: 4,
    image: "realestate.png",
    title: "Estate",
    subtitle: "Real Estate Platform",
    description:
      "A responsive property listing website allowing users to browse homes, apartments, and commercial properties while connecting buyers with agents.",
    tech: ["React", "Tailwind CSS"],
    live: "https://realstate-app-seven.vercel.app/",
    github: "https://github.com/RashedujjamanNoor/realstate-app",
  },

  {
    id: 5,
    image: "vidlypro.png",
    title: "VidlyPro",
    subtitle: "Creative Editing Agency",
    description:
      "A modern agency website showcasing professional video editing services with engaging animations, clean layouts, and an immersive user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://www.vidlypro.com/",
    github: "https://github.com/RashedujjamanNoor/agv",
  },
];

export default function Project() {
  return (
    <section id="projects" className="relative overflow-hidden  py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A collection of projects focused on beautiful interfaces,
            performance, scalability, and user experience.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 && "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* IMAGE */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  <FiExternalLink />
                  View Project
                </div>
              </motion.div>

              {/* CONTENT */}

              <div>
                <p className="mb-3 text-cyan-400">{project.subtitle}</p>

                <h3 className="mb-6 text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-8 leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <motion.span
                      whileHover={{
                        scale: 1.08,
                      }}
                      key={item}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    href={project.live}
                    className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black"
                  >
                    Live Demo
                    <FiArrowUpRight />
                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    href={project.github}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white"
                  >
                    <FiGithub />
                    Github
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
