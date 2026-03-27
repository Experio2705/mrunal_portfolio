import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Serenity – Mental Health Web App",
    description:
      "A full stack web application that provides journaling, AI-based mental health support, and counselor interaction.",
    tech: ["React", "JavaScript", "Supabase"],
    problem:
      "People need an accessible and safe platform to manage mental health and express their thoughts.",
    icon: Brain,
    featured: true,
    link: "https://solace-path-project.lovable.app/",
    github: "https://github.com/mrunal-s-shinde/mrunal-codes-and-creates"
  },
  {
    title: "SourceMart",
    description:
      "An intelligent sourcing platform that streamlines supplier discovery and procurement for small businesses.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    problem:
      "Small businesses struggle with finding reliable suppliers efficiently.",
    icon: ShoppingCart,
    featured: false,
    link: "#",
  },
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2>My Projects</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ backgroundImage: "var(--gradient-primary)" }} />
          <p className="text-muted-foreground max-w-lg mx-auto">A collection of projects showcasing my design and development skills.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card overflow-hidden group hover-lift ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className={`p-8 ${p.featured ? "md:flex md:gap-8 md:items-center" : ""}`}>
                <div className={`mb-6 ${p.featured ? "md:mb-0 md:w-1/3 flex justify-center" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundImage: "var(--gradient-subtle)" }}>
                    <p.icon size={28} className="text-primary" />
                  </div>
                </div>
                <div className={p.featured ? "md:w-2/3" : ""}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    {p.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{p.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">💡 {p.problem}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
<div className="flex gap-3">
  <a href={p.link} target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      size="sm"
      className="rounded-full text-xs group-hover:border-primary group-hover:text-primary transition-colors"
    >
      Live <ExternalLink size={12} className="ml-1.5" />
    </Button>
  </a>

  {p.github && (
    <a href={p.github} target="_blank" rel="noopener noreferrer">
      <Button
        variant="secondary"
        size="sm"
        className="rounded-full text-xs"
      >
        Code <Github size={12} className="ml-1.5" />
      </Button>
    </a>
  )}
</div>
  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
