import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';

import { ExternalLink, GitHubIcon } from '@/components/Icons';
import SectionTitle from '@/components/sections/SectionTitle';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'MediaVerse',
    description:
      'One stop for all things entertainment. A platform for discovering, streaming, and saving movies, TV shows, and more.',
    image: '/assets/images/projects/mediaverse.png',
    link: 'https://media-verse-747.vercel.app',
    type: 'web' as const,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TMDB API',
      'Prisma',
      'PostgreSQL',
      'Neondb',
    ],
  },
  {
    title: 'Device Health Management System',
    description:
      'A platform for managing device health and performance, for business, family and personal use.',
    image: '/assets/images/projects/dhms.png',
    link: 'https://dhms-spark-squad.vercel.app',
    type: 'web' as const,
    technologies: ['React Js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Telegram Clone',
    description:
      'A fully well functioal Telegram clone with a modern and user-friendly interface.',
    image: '/assets/images/projects/telegram.png',
    link: 'https://telegram-clone-wine.vercel.app/',
    type: 'web' as const,
    technologies: ['Next Js', 'TypeScript', 'Tailwind CSS', 'Telegram API'],
  },
  {
    title: 'OTP Media Blog',
    description:
      'A fully functional media blog with a modern and user-friendly interface, an admin dashboard for managing content and users, and a blog section for sharing articles and news.',
    image: '/assets/images/projects/otp.png',
    link: 'https://otpmedia.com.ng',
    type: 'web' as const,
    technologies: ['Next Js', 'TypeScript', 'Tailwind CSS', 'SEO'],
  },
  {
    title: 'Riders App',
    description:
      'A fully functional web logistics application for users to book and track their orders, with modern and clean UI design.',
    image: '/assets/images/projects/ridersapp.png',
    link: 'https://riders-app.vercel.app',
    type: 'web' as const,
    technologies: ['React Js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Fluxel',
    description:
      'A fully functional Broker application for trading and managing digital assets',
    image: '/assets/images/projects/fluxel.png',
    link: 'https://fluxel.app',
    type: 'web' as const,
    technologies: ['Next Js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'See Fit',
    description:
      'A web application for tracking your fitness progress, with a modern and clean UI design.',
    image: '/assets/images/projects/seefit.png',
    link: 'https://see-fit.vercel.app',
    type: 'web' as const,
    technologies: ['React Js', 'TypeScript', 'Tailwind CSS', 'Swiper Js'],
  },
  {
    title: 'Code Secure Academy',
    description:
      'A platform for learning and gaining expertise in coding, Pushing boundaries in cybersecurity education.',
    image: '/assets/images/projects/csa.png',
    link: 'https://csa-demo.vercel.app',
    type: 'web' as const,
    technologies: ['React Js', 'TypeScript', 'Tailwind CSS', 'Turbo'],
  },
  {
    title: 'Long Chris Foundation',
    description:
      'A Health Company Landing Page, with modern and clean UI design',
    image: '/assets/images/projects/longchris.png',
    link: 'https://longchris-foundation.vercel.app/',
    type: 'web' as const,
    technologies: ['React Js', 'TypeScript', 'Tailwind CSS', 'Swiper Js'],
  },
  {
    title: 'Expectoo Developement Company',
    description:
      'A Software Developement Company Landing page, with modern and clean UI design.',
    image: '/assets/images/projects/expectoo.png',
    link: 'https://expectoo-technology-nine.vercel.app/',
    type: 'web' as const,
    technologies: ['React Js', 'Javascript', 'SCSS'],
  },
  {
    title: '747 Image Domain',
    description:
      'A fully functional image platform to discover, find and search images, with modern and clean UI design.',
    image: '/assets/images/projects/imgdomain.png',
    link: 'https://747-image-domain.vercel.app/',
    type: 'web' as const,
    technologies: ['React Js', 'Javascript', 'SCSS'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

function ProjectsContents() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('mb-12')}>
        <SectionTitle
          title="Featured Projects"
          caption="My Work"
          description="A collection of projects that showcase my passion for building modern and user-friendly applications."
        />
      </div>
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={clsx(
          'grid gap-8',
          'sm:gap-10',
          'md:grid-cols-2 md:gap-12',
          'lg:gap-16'
        )}
      >
        {projects.map((project) => (
          <m.div
            key={project.title}
            variants={itemVariants}
            className={clsx('group')}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              type={project.type}
              technologies={project.technologies}
            />
          </m.div>
        ))}
      </m.div>
      <div className={clsx('mt-16 text-center')}>
        <Link
          href="https://github.com/onakoyakayode"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3',
            'hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700',
            'transition duration-300'
          )}
        >
          <GitHubIcon className="h-5 w-5" />
          <span className="font-medium">View more on GitHub</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectsContents;
