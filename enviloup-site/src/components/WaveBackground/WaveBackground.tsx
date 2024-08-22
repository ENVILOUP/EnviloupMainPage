import { motion } from "framer-motion";

export default function WaveBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        className="h-full bg-gradient-to-r from-gray-900 to-green-800"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        style={{ backgroundSize: "145% 145%" }}
      >
        {children}
      </motion.div>
    </>
  );
}
