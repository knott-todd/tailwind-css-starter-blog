import { allCoreContent } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import ProjectListLayout from '@/layouts/ProjectListLayout'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const projects = allCoreContent(allProjects).map((p) => ({
    ...p,
    summary: p.summary || '',
  }))
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Check out my latest work
          </p>
        </div>
        <ProjectListLayout projects={projects} />
      </div>
    </>
  )
}
