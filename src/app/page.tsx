"use client"

import { useState } from "react";
import AboutBlock from "@/components/AboutBlock";
import ContactModal from "@/components/contactModal";
import Footer from "@/components/Footer";
import HeaderBlock from "@/components/HeaderBlock";
import LocationBlock from "@/components/LocationBlock";
import Navbar from "@/components/Navbar";
import SocialsBlock from "@/components/SocialsBlock";
import { motion } from "framer-motion";



export default function Home() {
    const [openModal, isOpenModal] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between px-4 py-12 bg-background">
      <div className="w-full max-w-4xl">
        <Navbar />
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.05 }}
          className="mx-auto grid max-w-4xl grid-flow-dense gird-cols-12 gap-4 "
        >
          <HeaderBlock isOpenModal={isOpenModal} />
          <SocialsBlock />
          <AboutBlock />
          <LocationBlock />
        </motion.div>
        <Footer />
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-foreground rounded-lg shadow-lg p-2 w-full max-w-xl mx-auto">
          <ContactModal isOpenModal={isOpenModal}/>
          </div>
        </div>
      )}
    </main>
  );
}
