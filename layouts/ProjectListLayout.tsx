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
    <div className="overflow-hidden rounded-lg border bg-white shadow transition-shadow hover:shadow-lg dark:bg-gray-900">
      <Link href={`/projects/${slug}`}>
        <Image
          src={featureImage}
          alt={title}
          width={600}
          height={340}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      </Link>
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

export default function ProjectListLayout({
  projects,
  title = 'Projects',
}: ProjectListLayoutProps) {
  return (
    <section className="x-auto max-w-5xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-extrabold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
