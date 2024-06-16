"use client"

import { useState } from "react";
import AboutBlock from "@/components/AboutBlock";
import ContactModal from "@/components/Modals/contactModal";
import HeaderBlock from "@/components/HeaderBlock";
import LocationBlock from "@/components/LocationBlock";
import SocialsBlock from "@/components/SocialsBlock";
import { motion } from "framer-motion";
import { sortBlogs } from "@/lib/utils";
import { Blogs } from "velite/content";
import { BentoGrid, BentoGridItem } from "@/components/bento/bento-grid";
import Skeleton from "@/components/Skeleton/ImageSkeleton";
import ParentModal from "@/components/Modals/ParentModal";
import { ContainerScroll } from "@/components/framer-ui/container-scroll";
import Image from "next/image"
import { useTheme } from "next-themes";
import { FlipWords } from "@/components/framer-ui/flip-words";
import { PsalmsHeader } from "@/components/PsalmsHeader";
import { PortfolioViewLight, PortfolioViewDark } from "@/components/images";

export default function Home() {
    const [openModal, isOpenModal] = useState<boolean>(false);

    const latestBlogs = sortBlogs(Blogs).slice(0, 2)
    const { theme: nextTheme, resolvedTheme } = useTheme();

    const PortfolioTheme =
      nextTheme === "dark" || resolvedTheme === "dark"
        ? PortfolioViewDark
        : PortfolioViewLight;

     const IntroWords = [
       "One Verse at a Time",
       "Line by Line",
       "Code by Code",
       "Feature by Feature",
       "Iteration By Iteration",
       "Commit by Commit",
     ];

  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 leading-8"
              >
                Welcome to {<PsalmsHeader />} CodeLand. <br /> Where I craft
                Software Solutions, <br /> <FlipWords sentences={IntroWords} />
              </h1>
            </>
          }
        >
          <Image
            src={PortfolioTheme}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
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
            const { slug, date, title, description, tags } = blog;
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
            );
          })}
        </BentoGrid>
      </section>
      {openModal && (
        <ParentModal>
          <ContactModal isOpenModal={isOpenModal} />
        </ParentModal>
      )}
    </>
  );
}
