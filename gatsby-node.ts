import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const pagesResult = await graphql(`
    query GetAllPagesWithArticles {
      allContentfulPage {
        nodes {
          slug
          title
          articles {
            slug
            title
          }
        }
      }
    }
  `)

  if (pagesResult.errors) {
    throw pagesResult.errors
  }

  const pages = pagesResult.data?.allContentfulPage?.nodes || []

  pages.forEach((page: any) => {
    createPage({
      path: `/${page.slug}`,
      component: path.resolve('./src/templates/PageTemplate.tsx'),
      context: {
        slug: page.slug,
      },
    })
  })

  pages.forEach((page: any) => {
    if (page.articles && page.articles.length > 0) {
      page.articles.forEach((article: any) => {
        createPage({
          path: `/${page.slug}/${article.slug}`,
          component: path.resolve('./src/templates/ArticleTemplate.tsx'),
          context: {
            slug: article.slug,
            pageSlug: page.slug,
          },
        })
      })
    }
  })
}
