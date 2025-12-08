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
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
      <Link href={`/projects/${slug}`}>
        <Image
          src={featureImage}
          alt={title}
          width={600}
          height={340}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
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

export default function ProjectListLayout({ projects, title = 'Projects' }: ProjectListLayoutProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-8">{title}</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
