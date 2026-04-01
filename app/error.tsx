'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-6xl font-bold gradient-text mb-4">Oops</p>
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-[var(--color-muted-foreground)] mb-8 max-w-md mx-auto">
          Quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} size="lg">
            Réessayer
          </Button>
          <Button href="/" variant="outline" size="lg">
            Retour à l&apos;accueil
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
