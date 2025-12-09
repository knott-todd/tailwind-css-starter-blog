import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allProjects } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const sortedProjects = sortPosts(allProjects)
  const projects = allCoreContent(sortedProjects).map((p) => ({
    ...p,
    summary: p.summary || '',
  }))

  return <Main posts={posts} projects={projects} />
}
