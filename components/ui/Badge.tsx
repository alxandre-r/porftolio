import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline' | 'level'
  level?: 'expert' | 'advanced' | 'intermediate'
  className?: string
}

export function Badge({ children, variant = 'default', level, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' &&
          'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]',
        variant === 'accent' &&
          'bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20',
        variant === 'outline' &&
          'border border-[var(--color-border)] text-[var(--color-muted-foreground)]',
        variant === 'level' && level === 'expert' && 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
        variant === 'level' && level === 'advanced' && 'bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20',
        variant === 'level' && level === 'intermediate' && 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20',
        className
      )}
    >
      {children}
    </span>
  )
}
