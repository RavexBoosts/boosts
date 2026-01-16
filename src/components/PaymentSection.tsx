import { motion } from "framer-motion";
import { Bitcoin, Wallet } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Payment <span className="text-gradient">Methods</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We accept multiple payment methods for your convenience. All payments are secure and processed instantly.
          </p>
        </motion.div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border card-hover"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Bitcoin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Cryptomus</h3>
                <p className="text-sm text-muted-foreground">Crypto Payments</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Pay with Bitcoin, Ethereum, USDT, and other cryptocurrencies. Fast, secure, and anonymous transactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border card-hover"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">PayPal F&F</h3>
                <p className="text-sm text-muted-foreground">Friends & Family</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Manual PayPal payments via Friends & Family option. Contact us on Discord for instructions.
            </p>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          All purchases are processed through our secure SellAuth checkout system.
        </motion.p>
      </div>
    </section>
  );
};

export default PaymentSection;
