'use client'

import { motion } from 'framer-motion'
import { useProjectStore } from '@/lib/store/useProjectStore'
import { cn } from '@/lib/utils/cn'
import type { ProjectFilter as FilterType } from '@/lib/store/useProjectStore'

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'web', label: 'Web' },
  { value: 'tool', label: 'Outils' },
  { value: 'mobile', label: 'Mobile' },
]

export function ProjectFilter() {
  const { activeFilter, setFilter } = useProjectStore()

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = activeFilter === filter.value
        return (
          <button
            key={filter.value}
            onClick={() => setFilter(filter.value)}
            className={cn(
              'relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
              active
                ? 'text-white'
                : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]'
            )}
          >
            {active && (
              <motion.span
                layoutId="filter-indicator"
                className="absolute inset-0 bg-[var(--color-accent)] rounded-full"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
