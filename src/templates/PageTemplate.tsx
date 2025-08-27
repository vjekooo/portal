import React from 'react'
import { PageProps, graphql, HeadFC } from 'gatsby'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GoogleAnalytics } from '../components/GoogleAnalytics'

interface PageData {
  allContentfulPage: {
    nodes: {
      recentArticles: any
      slug: string
      title: string
      position: number
      description?: string
    }[]
  }
  contentfulPage: {
    title: string
    slug: string
    articles: {
      readingTime: string
      image: any
      slug: string
      title: string
      date: string
    }[]
  }
}

const PageTemplate: React.FC<PageProps<PageData>> = ({ data }) => {
  const pages = data.allContentfulPage.nodes
  const { contentfulPage } = data

  const currentSlug = contentfulPage.slug

  if (!contentfulPage) {
    return <div>Page not found</div>
  }

  return (
    <section className="bg-white">
      <GoogleAnalytics />
      <Header />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-6">
        <div className="hidden md:block">
          <nav className="w-full flex gap-2 top-0 pb-8 ">
            {pages.map((page, index) => {
              const cleanSlug = `/${page.slug.replace(/^\/+/, '')}`

              return (
                <div className="" key={page.slug}>
                  <a
                    href={cleanSlug}
                    className={`text-3xl ${
                      currentSlug === page.slug ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    {page.title} {index === pages.length - 1 ? '' : '/'}
                  </a>
                </div>
              )
            })}
          </nav>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentfulPage.articles?.map((article) => (
            <Card
              key={article.slug}
              article={{
                title: article.title,
                url: `/${contentfulPage.slug}/${article.slug}`,
                date: article.date,
                image: article.image?.file?.url?.startsWith('//')
                  ? `https:${article.image.file.url}`
                  : article.image?.file?.url || '',
                readingTime: article.readingTime || '5 min',
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export const Head: HeadFC<PageData> = ({ data }) => {
  const pageTitle = data?.contentfulPage?.title || 'Page'
  return <title>BRIID - {pageTitle}</title>
}

export const query = graphql`
  query GetPageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      articles {
        slug
        title
        date
        image {
          file {
            url
          }
        }
        readingTime
      }
    }
    allContentfulPage(sort: { position: ASC }) {
      nodes {
        slug
        title
        position
        recentArticles(limit: 3) {
          slug
          title
          date
          image {
            file {
              url
            }
          }
          readingTime
        }
      }
    }
  }
`

// @ts-ignore
export default PageTemplate
