'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
          Page introuvable
        </h1>
        <p className="text-[var(--color-muted-foreground)] mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/" size="lg">
          Retour à l&apos;accueil
        </Button>
      </motion.div>
    </div>
  )
}
