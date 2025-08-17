import * as React from 'react'
import { graphql, type HeadFC, type PageProps } from 'gatsby'
import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { GoogleAnalytics } from '../components/GoogleAnalytics'

interface PageData {
  allContentfulPage: {
    nodes: {
      recentArticles: any
      slug: string
      title: string
      description?: string
    }[]
  }
  featuredArticles: {
    nodes: {
      readingTime: string
      image: any
      slug: string
      title: string
      date: string
      excerpt?: string
    }[]
  }
  mostReadArticles: {
    nodes: {
      slug: string
      title: string
      views: number
      image: any
      date: string
      readingTime: string
      excerpt?: string
    }[]
  }
}

export default function HomePage({ data }: PageProps<PageData>) {
  const pages = data.allContentfulPage.nodes
  const featuredArticles = data.featuredArticles.nodes
  const mostReadArticles = data.mostReadArticles.nodes

  const heroArticles = featuredArticles.map((article) => ({
    title: article.title,
    url: `/featured/${article.slug}`,
    date: article.date,
    image: article.image?.file?.url?.startsWith('//')
      ? `https:${article.image.file.url}`
      : article.image?.file?.url || '',
  }))

  const mobileLinks = pages.map((page) => ({
    title: page.title,
    url: page.slug,
  }))

  return (
    <main>
      <GoogleAnalytics />
      <div
        className="carousel relative container mx-auto flex items-center flex-wrap"
        style={{ maxWidth: '1600px' }}
      >
        <Header mobileLinks={mobileLinks} />
        <Hero items={heroArticles} />
      </div>

      <section className="bg-white py-8">
        <div className="container mx-auto pt-4 pb-12">
          <div className="w-full top-0 px-6 py-1">
            <div className="w-full container mx-auto flex items-center justify-between mt-0 py-4">
              <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                Najčitanije
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mostReadArticles?.map((article: any) => (
                <Card
                  key={article.slug}
                  article={{
                    title: article.title,
                    url: `$featured/${article.slug}`,
                    date: article.date,
                    image: article.image?.file?.url?.startsWith('//')
                      ? `https:${article.image.file.url}`
                      : article.image?.file?.url || '',
                    readingTime: article.readingTime,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto pt-4 pb-12">
          <div className="w-full top-0 px-6 py-1 flex flex-col gap-3">
            {pages.map((page) => (
              <div className="w-full flex flex-col" key={page.slug}>
                <div className="w-full container mx-auto flex items-center justify-between mt-0 py-4">
                  <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                    <a href={page.slug}>{page.title}</a>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {page?.recentArticles?.map((article: any) => (
                    <Card
                      key={article.slug}
                      article={{
                        title: article.title,
                        url: `${page.slug}/${article.slug}`,
                        date: article.date,
                        image: article.image?.file?.url?.startsWith('//')
                          ? `https:${article.image.file.url}`
                          : article.image?.file?.url || '',
                        readingTime: article.readingTime,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{' '}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export const Head: HeadFC<PageData> = ({ data }) => {
  const featuredArticles = data.featuredArticles.nodes

  return (
    <>
      <title>BRIID - Your Premier Source for Industry News and Insights</title>
      <meta
        name="description"
        content="Stay updated with the latest industry news, featured articles, and expert insights on BRIID. Discover trending topics and in-depth analysis."
      />
      <meta
        name="keywords"
        content="industry news, insights, articles, analysis, BRIID"
      />

      {/* Open Graph */}
      <meta property="og:title" content="BRIID - Industry News and Insights" />
      <meta
        property="og:description"
        content="Stay updated with the latest industry news, featured articles, and expert insights."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://briid.magazine.com" />
      {featuredArticles[0]?.image?.file?.url && (
        <meta
          property="og:image"
          content={`https:${featuredArticles[0].image.file.url}`}
        />
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://briid.magazine.com" />
    </>
  )
}

export const query = graphql`
  query GetLandingPageData {
    allContentfulPage {
      nodes {
        slug
        title
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
    featuredArticles: allContentfulArticle(limit: 3, sort: { date: DESC }) {
      nodes {
        slug
        title
        image {
          file {
            url
          }
        }
        date
        excerpt: text {
          raw
        }
      }
    }
    mostReadArticles: allContentfulArticle(
      limit: 3
      sort: { views: DESC }
      filter: { views: { gt: 0 } }
    ) {
      nodes {
        slug
        title
        views
        image {
          file {
            url
          }
        }
        date
        readingTime
        excerpt: text {
          raw
        }
      }
    }
  }
`
