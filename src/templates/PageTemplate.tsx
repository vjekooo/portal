import React from 'react'
import { PageProps, graphql, Link, HeadFC } from 'gatsby'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface PageData {
  contentfulPage: {
    title: string
    slug: string
    articles: {
      image: any
      slug: string
      title: string
      date: string
    }[]
  }
}

const PageTemplate: React.FC<PageProps<PageData>> = ({ data }) => {
  const { contentfulPage } = data

  if (!contentfulPage) {
    return <div>Page not found</div>
  }

  return (
    <section className="bg-white">
      <Header />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-6">
        <nav id="store" className="w-full z-30 top-0 pb-8">
          <h1 className="text-2xl font-bold uppercase">
            {contentfulPage.title}
          </h1>
        </nav>

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
  return <title>BRIID {pageTitle}</title>
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
      }
    }
  }
`

export default PageTemplate
