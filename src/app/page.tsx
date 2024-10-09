"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "~/components/ui/auroa-background";
import NavigationMenu from "~/components/NavigationMenu";
import HeroSection from "~/components/HeroSection";


export default function HomePage() {
  return (
    <AuroraBackground>
      <div className="absolute z-[1] h-[100vh] w-[100vw]">
        <NavigationMenu />

        <HeroSection/>
      </div>
    </AuroraBackground>
  );
}
