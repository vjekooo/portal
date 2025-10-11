import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import React from 'react'

export const createRenderOptions = (references: any[]): any => ({
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
        <a href={uri} className="underline text-blue-600 hover:text-blue-800">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => {
      return <h1 className="h1 uppercase mb-6">{children}</h1>
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      return <p className="text-md mb-4 leading-relaxed">{children}</p>
    },
    // Handle embedded assets (images)
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const file = node.data.target.file
      if (!file) {
        return (
          <div className="my-4 p-4 border border-gray-200 rounded-lg">
            <p className="text-gray-500">Image not found</p>
          </div>
        )
      }

      if (file?.url) {
        const imageUrl = file.url.startsWith('//')
          ? `https:${file.url}`
          : file.url
        return (
          <figure className="my-8">
            <img
              src={imageUrl}
              alt={'Embedded image'}
              className="w-full max-w-full h-auto shadow-md"
              loading="lazy"
            />
          </figure>
        )
      }

      return (
        <div className="my-4 p-4 border border-gray-200 rounded-lg">
          <p className="text-gray-500">Image could not be loaded</p>
        </div>
      )
    },
  },
})
