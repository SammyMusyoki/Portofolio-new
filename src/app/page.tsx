"use client"

import AboutBlock from "@/components/AboutBlock";
import Footer from "@/components/Footer";
import HeaderBlock from "@/components/HeaderBlock";
import LocationBlock from "@/components/LocationBlock";
import Navbar from "@/components/Navbar";
import SocialsBlock from "@/components/SocialsBlock";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-12 bg-background">
      <div className='w-full max-w-4xl'>
        <Navbar />
        <motion.div
        initial='initial'
        animate="animate"
        transition={{ staggerChildren: 0.05}}
        className="mx-auto grid max-w-4xl grid-flow-dense gird-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <LocationBlock />
        </motion.div>
        <Footer />
      </div>
    </main>
  );
}
