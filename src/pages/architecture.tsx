import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { useGetAllArticles } from '../hooks/useGetAllArticles'

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

export default function Architecture() {
  const data = useGetAllArticles()

  return (
    <div>
      Arhitecture
      {data.map((article) => {
        const image = getImage(article.image)
        return (
          <div key={article.id}>
            <div>{article.title}</div>
            <div>{article.date}</div>
            {image && <GatsbyImage image={image} alt="blog image" />}
            <div>{renderRichText(article.text, options)}</div>
          </div>
        )
      })}
    </div>
  )
}
