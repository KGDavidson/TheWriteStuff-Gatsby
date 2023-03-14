import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogPost.tsx`)

  const result = await graphql(`
    query AllPosts {
      allDatoCmsBlogpost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  (result.data as any).allDatoCmsBlogpost.edges.forEach(({ node }: { node: { slug: string } }) => {
    createPage({
      path: 'blog/' + node.slug,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      }
    })
  })
}
