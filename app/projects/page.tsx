import type { Metadata } from 'next'
import { PageTransition } from '@/components/layout/PageTransition'
import { ProjectsGrid } from '@/components/projects/ProjectsGrid'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez mes projets fullstack et web : de l\'idée à la mise en production, avec storytelling technique.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-sm font-medium text-[var(--color-accent)] mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">projets</span>
          </h1>
          <p className="text-[var(--color-muted-foreground)] max-w-xl text-lg">
            Des projets personnels et professionnels, chacun racontant une histoire :
            un problème à résoudre, une solution imaginée, un impact concret.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </PageTransition>
  )
}
