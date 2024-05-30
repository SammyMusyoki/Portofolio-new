"use client"

import { cn, formatDate } from '@/lib/utils';
import { BentoGridItemProps } from '@/types/types';
import { motion } from "framer-motion";
import Link from 'next/link';
import React from 'react'

const BentoGrid = ({ children , className}: {
    children?: React.ReactNode;
    className?: string
}) => {
  return (
    <div
    className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}

const BentoGridItem = ({
    className,
    title,
    slug,
    date,
    description,
    image,
    tags,
    ...props
}: BentoGridItemProps) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={cn(
          "row-span-1 rounded-xl hover:shadow-xl shadow-input dark:shadow-none p-4 bg-background border justify-between flex flex-col space-y-4",
          className
        )}
        {...props}
      >
        {image}
        <div className="">
          <span className='text-xs p-1 border rounded bg-accent mb-1'>{formatDate(date)}</span>
          <div>
            <Link href={'/' + slug} className="font-sans font-bold text-primary mb-2 mt-2 leading-tight">
              {title}
            </Link>
          </div>
          <div className="font-sans font-normal text-xs line-clamp-2">
            {description}
          </div>
        </div>
      </motion.div>
    );
}

export { BentoGrid, BentoGridItem }
