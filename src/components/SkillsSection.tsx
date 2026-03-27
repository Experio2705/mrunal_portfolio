import { motion } from "framer-motion";
import { Lightbulb, Code, Palette, Search, Brain, BarChart3, MessageSquare, Layers, Database, Cpu } from "lucide-react";

const categories = [
  {
    title: "Product & UX",
    skills: [
      { name: "Product Thinking", icon: Lightbulb },
      { name: "UX Design", icon: Layers },
      { name: "User Research", icon: Search },
      { name: "Information Hierarchy", icon: BarChart3 },
    ],
  },
  {
    title: "Technology",
    skills: [
      { name: "Python", icon: Code },
      { name: "Pandas & NumPy", icon: Database },
      { name: "AI Fundamentals", icon: Brain },
      { name: "Data Analysis", icon: Cpu },
    ],
  },
  {
    title: "Creative",
    skills: [
      { name: "Visual Storytelling", icon: Palette },
      { name: "Branding", icon: Layers },
      { name: "Communication", icon: MessageSquare },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ backgroundImage: "var(--gradient-primary)" }} />
          <p className="text-muted-foreground max-w-lg mx-auto">A blend of design thinking, technical know-how, and creative flair.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass-card p-8 hover-lift"
            >
              <h3 className="font-display text-lg font-semibold mb-6">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                      <s.icon size={18} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
