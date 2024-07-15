"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "@/app/_sections/Hero";
import About from "@/app/_sections/About";
import Skills from "@/app/_sections/Skills";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="w-full h-full">
      <Hero />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>
    </main>
  );
}
