import "./Loader.css";
import { AnimatePresence, motion } from "framer-motion";

export const Loader: React.FC = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="loader" />
    </motion.div>
  </AnimatePresence>
);
