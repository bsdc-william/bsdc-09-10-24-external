"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="mt-[17rem] flex w-[100vw] flex-col items-center justify-center gap-3">
      <div>
        <motion.h1
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-5xl font-bold"
        >
          Harvest tommorows <span className="bg-blue-600/15 px-2">power</span>,
          <br />
          with your hands.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="mt-[2rem] max-w-[500px] opacity-30"
        >
          Utilise futuristic concepts and resources to help take you, and your
          ideas through the 5th dimention and into tommorow.
        </motion.p>
        <div className="mt-[1.5rem] flex gap-5">
          <motion.a
            href="/"
            className="smooth_transition w-[50%] rounded-lg bg-blue-600/80 p-3 text-center hover:bg-blue-600"
          >
            Build the future you want.
          </motion.a>
          <motion.a
            href="/"
            className="smooth_transition g-gradient-to-r w-[30%] rounded-lg bg-neutral-950/70 p-3 text-center hover:bg-neutral-950/80"
          >
            About us
          </motion.a>
        </div>
      </div>
    </div>
  );
}
