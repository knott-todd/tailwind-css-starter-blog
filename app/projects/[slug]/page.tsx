import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import { components } from '@/components/MDXComponents'

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) return notFound()
  const content = coreContent(project)
  return (
    <article className="px-4·py-8 mx-auto max-w-3xl">
      <h1 className="mb-4 text-4xl font-bold">{content.title}</h1>
      {content.featureImage && (
        <Image
          src={content.featureImage}
          alt={content.title}
          width={800}
          height={400}
          className="mb-6 max-h-[500px] w-auto rounded-lg object-contain"
        />
      )}
      <div className="mb-4 text-gray-500">
        <span>
          Published:{' '}
          {new Date(content.date).toLocaleDateString(siteMetadata.locale, {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        {content.tags && content.tags.length > 0 && (
          <p className="mt-1">
            <span className="font-semibold">Lassonde competencies:</span> {content.tags.join(', ')}
          </p>
        )}
      </div>
      <div className="prose dark:prose-invert">
        <MDXLayoutRenderer code={project.body.code} components={components} />
      </div>
    </article>
  )
}
