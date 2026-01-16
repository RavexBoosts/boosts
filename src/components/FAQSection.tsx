import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are boosts and members safe for my server?",
    answer: "Yes, 100%. We use legitimate boosting methods that comply with safety standards. Your server is never at risk of being banned or deleted. We've been in business for years with zero issues.",
  },
  {
    question: "How fast is delivery?",
    answer: "Most orders are delivered instantly or within a few minutes. For larger member orders, delivery can take up to a few hours to ensure quality and safety.",
  },
  {
    question: "Do members stay permanently?",
    answer: "Online members typically stay as long as you maintain your package. Offline members are permanent additions to your server's member count. Check individual product descriptions for details.",
  },
  {
    question: "Do you need my Discord login?",
    answer: "Absolutely not. We only need your Discord server invite link. We will never ask for your password or any personal account information.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cryptocurrency payments via Cryptomus (Bitcoin, Ethereum, USDT, etc.) and PayPal Friends & Family. All transactions are processed securely through our SellAuth checkout.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us 24/7 through our Discord server (discord.gg/DEubbpynyC), Telegram (@Boostsse), or by DMing our Discord ID: i46f. We typically respond within minutes.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, reach out to us on Discord.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl bg-card px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
