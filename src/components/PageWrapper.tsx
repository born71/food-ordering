import { motion } from "framer-motion";
import type { ReactNode } from "react"; 

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-screen overflow-y-auto"  // 👈 fixed height + scrollable content
        >
        {children}
    </motion.div>

  );
}
