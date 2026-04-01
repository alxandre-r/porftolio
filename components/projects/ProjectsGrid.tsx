'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { useProjectStore } from '@/lib/store/useProjectStore'
import { staggerContainer } from '@/lib/animations'
import type { Project } from '@/lib/data/types'

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const activeFilter = useProjectStore((s) => s.activeFilter)

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      <div className="mb-8">
        <ProjectFilter />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--color-muted-foreground)]">
          Aucun projet dans cette catégorie.
        </div>
      )}
    </div>
  )
}
