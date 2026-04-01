'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp } from '@/lib/animations'
import { projectColors } from '@/lib/projectColors'
import type { Project } from '@/lib/data/types'

interface ProjectCardProps {
  project: Project
}

const categoryLabels: Record<string, string> = {
  web: 'Web',
  fullstack: 'Fullstack',
  tool: 'Outil',
  mobile: 'Mobile',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const color = projectColors[project.colorKey]
  const isPersonal = project.slug === 'sandy'

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div
          className="h-full flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl"
          style={{
            borderColor: color.border,
            backgroundColor: 'var(--color-card)',
            boxShadow: `0 0 0 0 ${color.topBar}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 8px 40px ${color.bgSoft}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
          }}
        >
          {/* Color top bar */}
          <div className="h-1 w-full" style={{ background: color.topBar }} />

          {/* Image / visual area */}
          <div
            className="relative h-44 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${color.gradientFrom}22, ${color.gradientTo}44)`,
            }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`Capture d'écran de ${project.title}`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              /* Decorative placeholder for projects without screenshot */
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold opacity-40"
                  style={{ background: color.topBar, color: '#fff' }}
                >
                  {project.title[0]}
                </div>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${color.topBar} 0, ${color.topBar} 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '10px 10px',
                  }}
                />
              </div>
            )}

            {/* Badges overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
              {isPersonal && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{ background: color.bgSoft, color: color.text, border: `1px solid ${color.border}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color.topBar }} />
                  Projet personnel
                </span>
              )}
              {!isPersonal && <span />}
              <span
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                style={{ background: 'rgba(0,0,0,0.4)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {categoryLabels[project.category]}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-5 gap-3">
            <h3
              className="text-base font-semibold leading-snug transition-colors"
              style={{ color: 'var(--color-foreground)' }}
            >
              <span className="group-hover:opacity-0 transition-opacity absolute">{project.title}</span>
              <span style={{ color: color.text }}>{project.title}</span>
            </h3>

            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed line-clamp-2 flex-grow">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="default">+{project.techStack.length - 4}</Badge>
              )}
            </div>

            <div
              className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all"
              style={{ color: color.text }}
            >
              {isPersonal ? 'Ouvrir l\'application' : 'Voir le projet'}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
