import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Header } from '../components/Header'

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <b className="font-bold">{text}</b>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (
      node: { data: { uri: any } },
      children: React.ReactNode
    ) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => {
      return <h2>{children}</h2>
    },
  },
}

interface PageData {
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

  const image = getImage(contentfulArticle.image)

  return (
    <section className="bg-white">
      <Header />
      {image && <GatsbyImage image={image} alt={contentfulArticle.title} />}
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 w-full">
          <div className="space-y-4">
            <p>{formatDate(contentfulArticle.date)}</p>
            {/*@ts-ignore*/}
            <div>{renderRichText(contentfulArticle.text, options)}</div>
          </div>
          <div className="bg-gray-50 p-4">
            {/* Right sidebar content goes here */}
          </div>
        </div>
      </div>
    </section>
  )
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
      }
    }
  }
`

export default ArticleTemplate
