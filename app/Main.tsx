'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { motion } from 'framer-motion'
import FlipWords from '@/components/FlipWords'

const MAX_DISPLAY = 5

const contents = [
  {
    title: 'About Me',
    href: '/about',
    description: 'Who I am, what I study, and the engineer I want to become.',
  },
  {
    title: 'Career',
    href: '/career',
    description: 'My education, work and co-op experience, and resume.',
    children: [
      { title: 'Education: York University, Mechanical Engineering', href: '/career#education' },
      { title: 'Courses completed', href: '/career#courses' },
      {
        title: 'Work and co-op experience: Tesla, HeftIQ, and more',
        href: '/career#experience',
      },
      {
        title: 'Community, volunteer, and extracurriculars',
        href: '/career#community',
      },
      { title: 'Awards and technical skills', href: '/career#awards' },
      { title: 'Resume (PDF)', href: '/static/Olusanya_Todd_Resume.pdf' },
    ],
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'Course and personal projects, each with a reflection.',
    children: [
      {
        title: 'ENG 2003: Communication Project Reflections',
        href: '/projects/2026-04-13-eng2003-communication-project-reflections',
      },
      {
        title: 'Smart for What? My Vision as an Engineer (sustainability and ethics)',
        href: '/projects/2026-11-22-smart-for-what-my-vision-as-an-engineer',
      },
    ],
  },
  {
    title: 'Updates',
    href: '/blog',
    description: 'Blog posts on what I am learning along the way.',
  },
]

export default function Home({ posts, projects }) {
  return (
    <>
      <div className="divide-y divide-transparent">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          {/* subtle gradient background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-100/40 to-blue-200/30 opacity-40 blur-3xl dark:from-cyan-900/20 dark:to-blue-900/20" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col-reverse items-center items-start gap-14 px-4 lg:flex-row">
            {/* Image Side */}
            <motion.img
              src="/static/images/me_cleanup.jpg"
              width={350}
              height={260}
              className="rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Left Side Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl dark:text-gray-100">
                Hey,
                <br />{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Olusanya
                </span>{' '}
                here.
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-10 text-2xl text-gray-700 dark:text-gray-300"
              >
                Welcome to my <FlipWords words={['ePortfolio', 'blog', 'makerspace']} />
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contents */}
        <section className="px-4 py-14">
          <h2 className="mb-2 text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-gray-100">
            Contents
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My ePortfolio: who I am, where I&apos;ve worked, and what I&apos;ve built.
          </p>
          <ol className="mt-8 space-y-6">
            {contents.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-2xl font-bold"
                >
                  {section.title}
                </Link>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{section.description}</p>
                {section.children && (
                  <ul className="mt-2 ml-5 list-disc space-y-1">
                    {section.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Updates */}
        <section className="px-4 py-14">
          <h2 className="mb-2 text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-gray-100">
            Updates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">The day-to-day action</p>

          <ul className="divide-y divide-gray-300 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post, idx) => {
              const { slug, date, title, summary, tags } = post
              return (
                <motion.li
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="py-12"
                >
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>

                      <div className="space-y-5 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 hover:opacity-80 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>

                        <p className="prose max-w-none text-gray-600 dark:text-gray-400">
                          {summary}
                        </p>

                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                </motion.li>
              )
            })}
          </ul>
        </section>

        {/* All Posts Link */}
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end px-4">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-lg font-semibold"
            >
              All Posts →
            </Link>
          </div>
        )}

        {/* Newsletter */}
        {siteMetadata.newsletter?.provider && (
          <div className="flex justify-center pt-10 pb-20">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
