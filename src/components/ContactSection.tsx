import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase"; 

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Submitting:", form); // 👈 ADD THIS

  const { error } = await supabase.from("contacts").insert([
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
  ]);

  if (error) {
    console.log("ERROR:", error); 
    toast({
      title: "Error ❌",
      description: "Something went wrong. Try again.",
    });
  } else {
    toast({
      title: "Message sent 🚀",
      description: "Thanks for reaching out!",
    });
    setForm({ name: "", email: "", message: "" });
  }
};
  
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ backgroundImage: "var(--gradient-primary)" }} />
          <p className="text-muted-foreground max-w-lg mx-auto">Have a question or want to collaborate? Drop me a message!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, label: "connectwithmrunal@gmail.com", href: "mailto:connectwithmrunal@gmail.com" },
                { icon: Phone, label: "+91 9764886466", href: "tel:+919764886466" },
                { icon: MapPin, label: "Pune, India", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <Input
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-0 rounded-xl h-12"
            />
            <Input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-0 rounded-xl h-12"
            />
            <Textarea
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary/50 border-0 rounded-xl resize-none"
            />
            <Button type="submit" className="w-full rounded-xl h-12 font-medium" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Send Message <Send size={16} className="ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
