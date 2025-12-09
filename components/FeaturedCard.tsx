import Image from './Image'
import Link from './Link'

const FeaturedCard = ({ title, description, imgSrc, href, date, tags }) => (
  <div className="flex w-full flex-col items-center">
    <div className="mx-auto flex min-h-[450px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-lg md:flex-row dark:border-gray-700/60 dark:bg-gray-900">
      {/* Text Section */}
      <div className="flex w-full flex-col justify-start p-8 md:w-3/5">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="border-primary-500 border-l-2 pl-3 font-medium text-gray-500 dark:text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        <h2 className="mb-4 text-2xl leading-tight font-medium md:text-2xl">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className="prose max-w-none text-gray-600 dark:text-gray-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400 duration-150 ease-in-out hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300"
            >
              {tag}
            </Link>
          ))}
        </div>

        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-auto text-lg font-medium"
          >
            Read more →
          </Link>
        )}
      </div>

      {/* Image Section */}
      <div className="relative h-64 w-full md:h-auto md:w-1/2">
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center"
                fill
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-cover object-center"
              fill
            />
          ))}
      </div>
    </div>
  </div>
)

export default FeaturedCard
