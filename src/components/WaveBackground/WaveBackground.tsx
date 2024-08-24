import { motion } from "framer-motion";
import styles from './WaveBackground.module.scss'

export default function WaveBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        className={styles.background}
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
