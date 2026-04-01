import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-20 h-20"
    >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 120"
  width="120"
  height="120"
  role="img"
  aria-label="Logo AR"
>
  <defs>
    <style>{`
      .stroke { fill: none; stroke: #0f172a; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
      .fill { fill: #0f172a; }
    `}</style>
  </defs>

  {/* Fond transparent */}
  <rect width="120" height="120" fill="none" />

  {/* Lettre A géométrique (triangle stylisé) */}
  <path
    id="A-outline"
    className="stroke"
    d="M20 90 L50 28 L80 90 Z"
  />

  {/* Barre horizontale du A (séparée pour animation) */}
  <line
    id="A-bar"
    className="stroke"
    x1="34"
    y1="64"
    x2="66"
    y2="64"
  />

  {/* Lettre R géométrique reliée au A */}
  {/* Tige verticale (partagée avec A via positionnement) */}
  <line
    id="R-stem"
    className="stroke"
    x1="70"
    y1="40"
    x2="70"
    y2="90"
  />

  {/* Boucle rectangulaire du R */}
  <path
    id="R-loop"
    className="stroke"
    d="M70 40 h24 v20 h-24 z"
  />

  {/* Jambe diagonale du R */}
  <path
    id="R-leg"
    className="stroke"
    d="M94 60 L104 90"
  />

  {/* Optionnel: petit point pour équilibre visuel */}
  <circle id="dot" className="fill" cx="108" cy="96" r="1.5" />
</svg>
    </motion.div>
  )
}