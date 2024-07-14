"use client";
import Hero from "@/app/_sections/Hero";
import About from "./_sections/About";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="w-full h-full">
      <Hero />
      <section ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
      </section>
    </main>
  );
}
