import { motion } from "framer-motion";
import { Zap, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const boostProducts = [
  {
    name: "14x Server Boosts (1 Month)",
    description: "Level 3 perks for your server. Instant delivery. Lasts 30 days.",
    features: ["Instant Delivery", "24/7 Support", "Warranty Included"],
    url: "https://boostsse.mysellauth.com/product/14-discord-server-boosts-1-month",
    popular: true,
  },
  {
    name: "14x Server Boosts (3 Months)",
    description: "Level 3 perks for your server. Best value. Lasts 90 days.",
    features: ["Instant Delivery", "24/7 Support", "Warranty Included"],
    url: "https://boostsse.mysellauth.com/product/14-discord-server-boosts-3-month",
    popular: false,
  },
  {
    name: "14x Server Boosts (1 Year)",
    description: "Level 3 perks for your server. Ultimate savings. Lasts 365 days.",
    features: ["Instant Delivery", "24/7 Support", "Warranty Included"],
    url: "https://boostsse.mysellauth.com/product/14-discord-server-boosts-1-year",
    popular: false,
  },
];

const memberProducts = [
  {
    name: "Discord Online Members",
    description: "Boost your server's visibility with active online members that stay connected.",
    features: ["Fast Delivery", "Real-looking Profiles", "24/7 Support"],
    url: "https://boostsse.mysellauth.com/product/discord-onine-members",
  },
  {
    name: "Discord Offline Members",
    description: "Increase your member count with offline members for a larger community appearance.",
    features: ["Fast Delivery", "Real-looking Profiles", "24/7 Support"],
    url: "https://boostsse.mysellauth.com/product/discord-offline-members",
  },
];

const ProductCard = ({ 
  product, 
  isPopular = false,
  icon: Icon 
}: { 
  product: { name: string; description: string; features: string[]; url: string }; 
  isPopular?: boolean;
  icon: React.ElementType;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl bg-card border ${
        isPopular ? "border-primary glow-border" : "border-border"
      } p-6 card-hover`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={`w-full ${
          isPopular 
            ? "bg-primary hover:bg-primary/90 glow-primary" 
            : "bg-primary hover:bg-primary/90"
        }`}
      >
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
      </Button>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect boost package for your server. All packages include instant delivery and 24/7 support.
          </p>
        </motion.div>

        {/* Discord Server Boosts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Zap className="w-6 h-6 text-primary" />
            Discord Server Boosts
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {boostProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                isPopular={product.popular}
                icon={Zap}
              />
            ))}
          </div>
        </div>

        {/* Discord Members */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Users className="w-6 h-6 text-accent" />
            Discord Members
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {memberProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product}
                icon={Users}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
