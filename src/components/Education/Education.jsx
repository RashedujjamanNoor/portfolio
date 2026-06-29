import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institute:
      "Bangladesh Army University of Science and Technology (BAUST), Saidpur",
    duration: "2019 - 2024",
    description:
      "Focused on software engineering, algorithms, database systems, web development, and modern application architecture. Alongside academics, I actively build full-stack MERN projects and continuously explore new technologies.",
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Dinajpur Adarsha College",
    duration: "2017 - 2019",
    description:
      "Completed higher secondary education with a science background while developing a strong interest in programming and software development.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Academic Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            My educational background and continuous learning journey in
            software development.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}

          <div
            className="
    absolute
    left-5
    top-0
    h-full
    w-[3px]
    rounded-full
    bg-[linear-gradient(to_bottom,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)]
    bg-[length:100%_250%]
    animate-[gradient_6s_linear_infinite]
    md:left-1/2
    md:-translate-x-1/2
  "
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative mb-14 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}

              <div className="absolute left-5 top-8 z-10 h-5 w-5 rounded-full border-4 border-[#050816] bg-cyan-400 md:left-1/2 md:-translate-x-1/2"></div>

              {/* Card */}

              <div className="ml-14 w-full md:ml-0 md:w-[45%]">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="text-cyan-400">{item.institute}</p>
                    </div>
                  </div>

                  <div className="mb-5 flex items-center gap-2 text-zinc-400">
                    <FiCalendar />
                    {item.duration}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
