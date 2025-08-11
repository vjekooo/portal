import React from 'react'
import { HeadFC, PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Header } from '../components/Header'
import { createRenderOptions } from '../utils/contentful'
import { Footer } from '../components/Footer'

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

interface PageData {
  references: any
  contentfulArticle: {
    title: string
    date: string
    slug: string
    text: {
      raw: string
    }
    image?: any
  }
}

const ArticleTemplate: React.FC<PageProps<PageData>> = ({ data }) => {
  const { contentfulArticle } = data

  if (!contentfulArticle) {
    return <div>Article not found</div>
  }

  const options = createRenderOptions(data.references)

  const image = getImage(contentfulArticle.image)

  return (
    <section className="bg-white">
      <Header />
      {image && <GatsbyImage image={image} alt={contentfulArticle.title} />}
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 w-full">
          <div className="px-6">
            <p className="pb-3">{formatDate(contentfulArticle.date)}</p>
            {/*@ts-ignore*/}
            <div>{renderRichText(contentfulArticle.text, options)}</div>
          </div>
          <div className="bg-white p-4">
            {/* Right sidebar content goes here */}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export const Head: HeadFC<PageData> = ({ data }) => {
  const pageTitle = data?.contentfulArticle?.title || 'Article'
  return <title>BRIID - {pageTitle}</title>
}

export const query = graphql`
  query GetArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      date
      slug
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      text {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            description
            file {
              url
            }
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default ArticleTemplate
