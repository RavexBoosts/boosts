import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex K.",
    role: "Server Owner",
    content: "Incredible service! Got my 14 boosts within minutes of payment. My server is now Level 3 and looks amazing.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Community Manager",
    content: "The online members made our server look much more active. Great for attracting new real members!",
    rating: 5,
  },
  {
    name: "Chris D.",
    role: "Gaming Community",
    content: "Been using boosts.se for 6 months now. Always reliable, always fast. Best prices I've found anywhere.",
    rating: 5,
  },
  {
    name: "Jordan T.",
    role: "NFT Project",
    content: "Needed boosts for our NFT launch. The team delivered exactly what we needed. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mike R.",
    role: "Streamer",
    content: "24/7 support is legit. Had a question at 3 AM and got a response within minutes. Amazing service!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust boosts.se for their Discord growth needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-4">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
