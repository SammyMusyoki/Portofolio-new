"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  sentences,
  duration = 3000,
  className,
}: {
  sentences: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextSentenceIndex =
      currentSentenceIndex === sentences.length - 1
        ? 0
        : currentSentenceIndex + 1;
    const nextSentence = sentences[nextSentenceIndex];
    setCurrentWords(nextSentence.split(" "));
    setCurrentSentenceIndex(nextSentenceIndex);
    setIsAnimating(true);
  }, [currentSentenceIndex, sentences]);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentSentenceIndex}
      >
        {currentWords.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.2,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
