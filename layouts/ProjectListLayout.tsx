import Card from '@/components/Card'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface ProjectCardProps {
  title: string
  summary: string
  featureImage: string
  slug: string
}

function ProjectCard({ title, summary, featureImage, slug }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col">
      <div
        className={`${featureImage && 'h-full'} flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
      >
        {featureImage && (
          <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={featureImage}
              className="w-full object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        )}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
            <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          </h3>
          <p className="prose mb-3 max-w-none flex-1 text-gray-500 dark:text-gray-400">{summary}</p>
          <Link
            href={`/projects/${slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-auto text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

interface ProjectListLayoutProps {
  projects: Array<{
    title: string
    summary: string
    featureImage: string
    slug: string
  }>
  title?: string
}

export default function ProjectListLayout({ projects }: ProjectListLayoutProps) {
  return (
    <div className="gap-x-8·gap-y-12·md:grid-cols-3 grid grid-cols-1">
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projects.map((d) => (
            <Card
              key={d.slug}
              title={d.title}
              description={d.summary}
              imgSrc={d.featureImage}
              href={`/projects/${d.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
