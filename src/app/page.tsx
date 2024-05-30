"use client"

import { useState } from "react";
import AboutBlock from "@/components/AboutBlock";
import ContactModal from "@/components/contactModal";
import HeaderBlock from "@/components/HeaderBlock";
import LocationBlock from "@/components/LocationBlock";
import SocialsBlock from "@/components/SocialsBlock";
import { motion } from "framer-motion";
import { sortBlogs } from "@/lib/utils";
import { Blogs } from "velite/content";
import { BentoGrid, BentoGridItem } from "@/components/bento/bento-grid";
import Skeleton from "@/components/Skeleton/ImageSkeleton";


export default function Home() {
    const [openModal, isOpenModal] = useState<boolean>(false);

    const latestBlogs = sortBlogs(Blogs).slice(0, 2)

  return (
    <>
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
      <section className="py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 font-bold">
          Latest Blogs
        </h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {latestBlogs.map((blog, i) => {
            const { slug, date, title, description, tags } = blog
            return (
              <BentoGridItem
                key={i}
                slug={slug}
                title={title}
                date={date}
                description={description}
                image={<Skeleton />}
                tags={tags}
                />
            )
          })}
        </BentoGrid>
      </section>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-foreground rounded-lg shadow-lg p-2 w-full max-w-xl mx-auto">
            <ContactModal isOpenModal={isOpenModal} />
          </div>
        </div>
      )}
    </>
  );
}
