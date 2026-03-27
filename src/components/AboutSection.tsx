 import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-primary/30 shadow-lg">
                <img
                  src="/profile.jpeg"
                  alt="Mrunal Shinde"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 sm:w-72 h-64 sm:h-72 rounded-3xl border border-primary/20 -z-10" />
            </div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              About Me
            </h2>
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            />

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Computer Science undergrad at Sinhgad Institute of Technology and Science, Pune (2023–2027),
              driven by a deep interest in{" "}
              <span className="text-foreground font-medium">Product Design</span>,
              <span className="text-foreground font-medium"> UX Research</span>, and
              <span className="text-foreground font-medium"> Artificial Intelligence</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I love bridging the gap between technology and human needs—crafting solutions that are not just
              functional but truly delightful. Whether it's dissecting user behavior, building data-driven
              products, or visual storytelling, I'm all in.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Pune, India", "CS Engineering", "Class of 2027"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
