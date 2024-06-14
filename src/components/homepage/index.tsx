"use client"

import { PsalmsHeader } from '../PsalmsHeader'
import { FlipWords } from '../framer-ui/flip-words'
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SpeakerGrid } from './_components/speakergrid';
import { Lid } from './_components/lid';
import { Keypad } from './_components/keyboard';
import { Trackpad } from './_components/trackpad';
import { PortfolioViewLight, PortfolioViewDark } from "./images"
import { useTheme } from "next-themes";


 

const MacBookScroll = ({
  showGradient,
  title,
}: {
  showGradient?: boolean;
  title?: string | React.ReactNode;
}) => {

    const IntroWords = [
        "One Verse at a Time",
        "Line by Line",
        "Code by Code",
        "Feature by Feature",
        "Iteration By Iteration",
        "Commit by Commit",
    ]
    const ref = useRef<HTMLDivElement>(null)
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start start", "end start"],
     });

     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
       if (window && window.innerWidth < 768) {
         setIsMobile(true);
       }
     }, []);

     const scaleX = useTransform(
       scrollYProgress,
       [0, 0.3],
       [1.2, isMobile ? 1 : 1.5]
     );
     const scaleY = useTransform(
       scrollYProgress,
       [0, 0.3],
       [0.6, isMobile ? 1 : 1.5]
     );
     const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
     const rotate = useTransform(
       scrollYProgress,
       [0.1, 0.12, 0.3],
       [-28, -28, 0]
     );
     const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
     const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const { theme: nextTheme, resolvedTheme } = useTheme();

     const PortfolioTheme = nextTheme === "dark" || resolvedTheme === "dark" ? PortfolioViewLight : PortfolioViewDark;
 

  return (
    <div
      ref={ref}
      className="min-h-[110vh] md:min-h-[200vh] flex flex-col items-center py-0 md:pb-40 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-75"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:mt-12 mb-28 leading-8 scale-0"
      >
        Welcome to {<PsalmsHeader />} CodeLand. <br /> Where I craft Software
        Solutions, <br /> <FlipWords sentences={IntroWords} />
      </motion.h2>

      <Lid
        src={PortfolioTheme}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base Ares */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
        )}
      </div>
    </div>
  );
}

export default MacBookScroll
