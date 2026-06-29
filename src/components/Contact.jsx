import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const contacts = [
  {
    icon: <FiMail />,
    title: "Email",
    value: "mdrashedujjaman912@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "+880 1765-966912",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Saidpur, Nilphamari, Bangladesh",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnakjdl");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">Contact</p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Have a project in mind or want to collaborate? Feel free to send me
            a message.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >
            {contacts.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-cyan-500/10 p-4 text-3xl text-cyan-400">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>

                    <p className="text-zinc-400">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                disabled={state.submitting}
                type="submit"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                {state.submitting ? "Sending..." : "Send Message"}

                <FiSend className="transition group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
