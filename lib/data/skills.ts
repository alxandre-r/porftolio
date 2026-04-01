import type { Skill } from './types'

export const skills: Skill[] = [
  // Frontend / Dev
  { name: 'JavaScript / TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'React / Next.js', category: 'frontend', level: 'advanced' },
  { name: 'HTML / CSS', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'C / C++ / C#', category: 'frontend', level: 'intermediate' },

  // Backend
  { name: 'Node.js / Express', category: 'backend', level: 'advanced' },
  { name: 'Python / Django', category: 'backend', level: 'intermediate' },
  { name: 'PHP', category: 'backend', level: 'intermediate' },
  { name: 'MySQL', category: 'backend', level: 'advanced' },
  { name: 'WordPress / WooCommerce', category: 'backend', level: 'intermediate' },

  // Infrastructure & Systèmes
  { name: 'Windows Server / Linux', category: 'devops', level: 'intermediate' },
  { name: 'Active Directory', category: 'devops', level: 'intermediate' },
  { name: 'Nginx / Apache / PM2', category: 'devops', level: 'intermediate' },
  { name: 'VPS & hébergement cloud', category: 'devops', level: 'intermediate' },
  { name: 'Microsoft 365 Admin', category: 'devops', level: 'intermediate' },

  // Outils
  { name: 'Git / GitHub', category: 'tools', level: 'advanced' },
  { name: 'Trello / Notion', category: 'tools', level: 'advanced' },
  { name: 'DBeaver', category: 'tools', level: 'intermediate' },
  { name: 'LaTeX / Overleaf', category: 'tools', level: 'intermediate' },
  { name: 'ESP32 / Espressif', category: 'tools', level: 'intermediate' },
]

export const skillsByCategory = {
  frontend: skills.filter((s) => s.category === 'frontend'),
  backend: skills.filter((s) => s.category === 'backend'),
  devops: skills.filter((s) => s.category === 'devops'),
  tools: skills.filter((s) => s.category === 'tools'),
}
