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

  const featuredArticlesResult = await graphql(`
    query GetFeaturedArticles {
      allContentfulArticle(limit: 10, sort: { date: DESC }) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  if (pagesResult.errors || featuredArticlesResult.errors) {
    throw pagesResult.errors || featuredArticlesResult.errors
  }

  // @ts-ignore
  const pages = pagesResult.data?.allContentfulPage?.nodes || []
  const featuredArticles =
    // @ts-ignore
    featuredArticlesResult.data?.allContentfulArticle?.nodes || []

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

  featuredArticles.forEach((article: any) => {
    createPage({
      path: `/featured/${article.slug}`,
      component: path.resolve('./src/templates/ArticleTemplate.tsx'),
      context: {
        slug: article.slug,
        isFeatured: true,
      },
    })
  })
}

// @ts-ignore
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    ContentfulPage: {
      recentArticles: {
        type: ['ContentfulArticle'],
        args: {
          limit: {
            type: 'Int',
            defaultValue: 3,
          },
        },
        resolve: async (
          source: { articles___NODE: any },
          args: { limit: any },
          context: {
            nodeModel: {
              findAll: (arg0: {
                query: {
                  filter: { id: { in: any } }
                  sort: { fields: string[]; order: string[] }
                  limit: any
                }
                type: string
              }) => PromiseLike<{ entries: any }> | { entries: any }
            }
          }
        ) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                id: { in: source.articles___NODE || [] },
              },
              sort: {
                fields: ['date'],
                order: ['DESC'],
              },
              limit: args.limit,
            },
            type: 'ContentfulArticle',
          })

          return Array.from(entries)
        },
      },
    },
  }

  createResolvers(resolvers)
}
