import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 16, className = '', as: Component = motion.div, ...rest }) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
