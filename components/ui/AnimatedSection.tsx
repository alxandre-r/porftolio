'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils/cn'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = stagger ? staggerContainer : fadeInUp

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
