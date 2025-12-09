import Image from './Image'
import Link from './Link'

const FeaturedCard = ({ title, description, imgSrc, href }) => (
  <div className="flex w-full flex-col items-center">
    <div className="mx-auto flex min-h-[350px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-lg md:flex-row dark:border-gray-700/60 dark:bg-gray-900">
      {/* Text Section */}
      <div className="flex w-full flex-col justify-start p-8 md:w-2/3">
        <h2 className="mb-4 text-lg leading-tight font-bold md:text-2xl">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className="prose mb-6 max-w-none text-gray-600 dark:text-gray-400">{description}</p>

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
