"use client";
import { motion } from "framer-motion";
import useWindowDimensions from "~/lib/hooks/useWindowDimentions";
import { cn } from "~/lib/utils";

export default function HeroSection() {
  const { width } = useWindowDimensions();
  return (
    <div
      className={cn(
        "mt-[17rem] flex w-[100vw] flex-col items-center justify-center gap-3",
      )}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className={cn("font-bold", width > 1000 ? "text-5xl" : "text-3xl")}
        >
          Harvest tommorows <span className="bg-blue-600/15 px-2">power</span>,
          <br />
          with your hands.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <motion.p
            className={cn(
              "mt-[2rem] opacity-30",
              width > 1000 ? "max-w-[500px]" : "max-w-[400px]",
            )}
          >
            Utilise futuristic concepts and resources to help take you, and your
            ideas through the 5th dimention and into tommorow.
          </motion.p>

          <div
            className={cn(
              "mt-[1.5rem] flex gap-5",
              width < 950 ? "flex-col" : "",
            )}
          >
            <motion.a
              href="/"
              className={cn(
                "smooth_transition rounded-lg bg-blue-600/80 p-3 text-center hover:bg-blue-600",
                width < 950 ? "w-[100%]" : "w-[70%]",
              )}
            >
              Build the future you want.
            </motion.a>
            <motion.a
              href="/"
              className={cn(
                "smooth_transition g-gradient-to-r rounded-lg bg-neutral-950/70 p-3 text-center hover:bg-neutral-950/80",
                width < 950 ? "w-[100%]" : "w-[30%]",
              )}
            >
              About us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
