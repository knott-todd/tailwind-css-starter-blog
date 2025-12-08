
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import ProjectListLayout from '@/layouts/ProjectListLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const projects = allCoreContent(allProjects).map((project) => ({
    title: project.title,
    summary: project.summary ?? '',
    featureImage: project.featureImage,
    slug: project.slug,
  }))
  return <ProjectListLayout projects={projects} />
}
