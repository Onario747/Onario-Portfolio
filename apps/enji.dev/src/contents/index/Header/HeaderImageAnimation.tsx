import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.5 + i * 0.2, duration: 1.5, ease: 'easeInOut' },
      opacity: { delay: 0.5 + i * 0.2, duration: 0.8 },
    },
  }),
};

const glowAnimation = {
  initial: { strokeDashoffset: 0 },
  animate: {
    strokeDashoffset: -1000,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[500px] w-[500px] opacity-60',
        'dark:opacity-40',
        'transition-opacity duration-300 hover:opacity-80'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      <defs>
        <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(var(--color-accent-500), 0)" />
          <stop offset="50%" stopColor="rgba(var(--color-accent-500), 1)" />
          <stop offset="100%" stopColor="rgba(var(--color-accent-500), 0)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      {/* Glowing border animation */}
      <m.path
        variants={glowAnimation}
        initial="initial"
        animate="animate"
        d="M150 50 H350 Q400 50 400 100 V400 Q400 450 350 450 H150 Q100 450 100 400 V100 Q100 50 150 50"
        stroke="url(#glow-gradient)"
        strokeWidth={4}
        strokeDasharray={1000}
        filter="url(#glow)"
        opacity={0.6}
      />

      {/* Mobile device frame */}
      <m.path
        variants={animation}
        custom={0}
        d="M150 50 H350 Q400 50 400 100 V400 Q400 450 350 450 H150 Q100 450 100 400 V100 Q100 50 150 50"
      />

      {/* Screen content - header bar */}
      <m.path variants={animation} custom={1} d="M120 100 H380" />

      {/* Navigation menu lines */}
      <m.path
        variants={animation}
        custom={2}
        d="M140 150 H200 M140 170 H180 M140 190 H190"
      />

      {/* Code bracket symbols */}
      <m.path
        variants={animation}
        custom={3}
        d="M250 150 L270 170 L250 190 M300 150 L280 170 L300 190"
      />

      {/* UI Elements - buttons and cards */}
      <m.path
        variants={animation}
        custom={4}
        d="M140 220 H360 M140 260 H360 M140 300 H360"
      />

      {/* Responsive design indicators */}
      <m.path
        variants={animation}
        custom={5}
        d="M140 340 H200 Q210 340 210 350 V380 Q210 390 200 390 H140 Q130 390 130 380 V350 Q130 340 140 340"
      />
      <m.path
        variants={animation}
        custom={5}
        d="M240 340 H300 Q310 340 310 350 V380 Q310 390 300 390 H240 Q230 390 230 380 V350 Q230 340 240 340"
      />

      {/* Mobile bottom bar */}
      <m.path variants={animation} custom={6} d="M220 420 H280" />
    </m.svg>
  );
}

export default HeaderImageAnimation;
