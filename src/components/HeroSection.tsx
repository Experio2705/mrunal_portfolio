import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Product Designer", "CS Student", "UX Researcher", "Creative Technologist"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Background Gradient Orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Intro */}
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">Mrunal</span> 👋
          </h1>

          {/* Typing Role */}
          <div className="h-10 mb-6">
            <span className="font-display text-xl sm:text-2xl text-muted-foreground">
              {text}
              <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">
                &nbsp;
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            I design meaningful digital experiences using technology and user insights.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* View Projects */}
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-medium"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <a href="#projects">View Projects</a>
            </Button>

            {/* Contact */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium"
            >
              <a href="#contact">Contact Me</a>
            </Button>

            {/* Resume */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium"
            >
              <a
                href="/Mrunal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown size={18} className="mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
