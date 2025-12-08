import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) return notFound()
  const content = coreContent(project)
  return (
    <article className="mx-auto max-w-3xl py-8 px-4">
      <h1 className="mb-4 text-4xl font-bold">{content.title}</h1>
      <Image
        src={content.featureImage}
        alt={content.title}
        width={800}
        height={400}
        className="mb-6 rounded-lg object-cover"
      />
      <div className="mb-4 text-gray-500">
        <span>Published: {content.date}</span>
      </div>
      <div className="prose dark:prose-invert">
        <MDXLayoutRenderer code={project.body.code} />
      </div>
    </article>
  )
}
