import type { Target, TargetAndTransition, Transition, VariantLabels } from 'framer-motion'

// Properly typed bezier easing
export const EXPO: [number, number, number, number] = [0.19, 1, 0.22, 1]

type MotionProps = {
  initial: Target | boolean | VariantLabels
  whileInView: TargetAndTransition | VariantLabels
  viewport: { once: boolean; margin?: string }
  transition: Transition
}

export function fadeUp(delay = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, delay, ease: EXPO },
  }
}

export function fadeUpLight(delay = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: EXPO },
  }
}
