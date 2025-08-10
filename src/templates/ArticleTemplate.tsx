import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
    <div>
      <h1>{contentfulArticle.title}</h1>
      <p>{contentfulArticle.date}</p>
      {image && <GatsbyImage image={image} alt={contentfulArticle.title} />}
      <div>{renderRichText(contentfulArticle.text, options)}</div>
    </div>
  )
}

export const query = graphql`
  query GetArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      date
      slug
      text {
        raw
      }
    }
  }
`

export default ArticleTemplate
