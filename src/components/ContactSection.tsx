import { motion } from "framer-motion";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or need help? Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="https://discord.gg/DEubbpynyC"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border card-hover text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#5865F2]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-[#5865F2]" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Discord Server</h3>
            <p className="text-muted-foreground text-sm mb-4">Join our community for support and updates</p>
            <Button variant="outline" className="border-border hover:bg-secondary">
              Join Server
            </Button>
          </motion.a>

          <motion.a
            href="https://t.me/Boostsse"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#0088cc]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Send className="w-7 h-7 text-[#0088cc]" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Telegram</h3>
            <p className="text-muted-foreground text-sm mb-4">Message us directly on Telegram</p>
            <Button variant="outline" className="border-border hover:bg-secondary">
              @Boostsse
            </Button>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-card border border-border text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <User className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Discord DM</h3>
            <p className="text-muted-foreground text-sm mb-4">Add and message us directly</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground font-mono text-sm">
              i46f
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
