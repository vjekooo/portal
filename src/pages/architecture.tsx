import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { useGetAllPosts } from '../hooks/useGetAllPosts'

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}

export default function Architecture() {
  const data = useGetAllPosts()

  return (
    <div>
      Arhitecture
      {data.map((post) => {
        const image = getImage(post.image)
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.date}</div>
            <GatsbyImage image={image} alt="blog image" />
            <div>{renderRichText(post.text, options)}</div>
          </div>
        )
      })}
    </div>
  )
}
