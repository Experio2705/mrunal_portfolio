import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">Experience & Certifications</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ backgroundImage: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundImage: "var(--gradient-primary)" }}>
                <Briefcase size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">REVE CULT</h3>
                <p className="text-xs text-muted-foreground">Product Design & Research Analyst</p>
              </div>
            </div>

            <div className="border-l-2 border-primary/20 pl-6 space-y-4">
              {[
                "Conducted user research and competitive analysis to inform product strategy",
                "Led market analysis identifying key user pain points and opportunities",
                "Contributed to product ideation sessions and feature prioritization",
                "Collaborated cross-functionally with engineering and marketing teams",
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundImage: "var(--gradient-primary)" }}>
                  <Award size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Deloitte Data Analytics Simulation</h3>
                  <p className="text-sm text-muted-foreground mb-3">Forage — Virtual Experience Program</p>
                  <p className="text-xs text-muted-foreground">
                    Completed hands-on simulation involving data cleaning, analysis, and visualization 
                    to derive business insights using real-world datasets.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card p-8">
              <h3 className="font-display text-lg font-semibold mb-6">Tools I Use</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Canva", emoji: "🎨" },
                  { name: "CapCut", emoji: "🎬" },
                  { name: "AI Tools", emoji: "🤖" },
                  { name: "Figma", emoji: "🖼️" },
                  { name: "VS Code", emoji: "💻" },
                  { name: "Git", emoji: "🔀" },
                ].map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-accent transition-colors">
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className="text-xs font-medium text-muted-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
