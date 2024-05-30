"use client"

import { cn } from '@/lib/utils'
import { MotionProps, motion } from 'framer-motion'
import React from 'react'

type BlockProps = {
    className?: string
    children?: React.ReactNode
} & MotionProps

const Block = ({ className, children, ...props}: BlockProps) => {
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
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
    }}
    className={cn("col-span-4 rounded-lg border p-6 mt-4", className)}
    {...props}
    >
        {children}
    </motion.div>
  )
}

export default Block
