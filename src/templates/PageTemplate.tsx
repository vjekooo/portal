import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { Card } from '../components/Card'
import { Head } from '../pages'
import { Header } from '../components/Header'

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
    <section className="bg-white py-8">
      <Header />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <h1>{contentfulPage.title}</h1>
        </nav>

        <div className="grid">
          {contentfulPage.articles?.map((article) => (
            <Card
              article={{
                title: article.title,
                url: article.slug,
                date: article.date,
                image: article.image?.file?.url?.startsWith('//')
                  ? `https:${article.image.file.url}`
                  : article.image?.file?.url || '',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
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
