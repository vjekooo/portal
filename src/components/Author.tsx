import React from 'react'

export interface Author {
  avatar: {
    file: {
      url: string
    }
  }
  firstName: string
  lastName: string
}

interface Props {
  author: Author
}

export const Author = ({ author }: Props) => (
  <div>
    <div className="flex items-center">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={
          author.avatar.file.url.startsWith('//')
            ? `https:${author.avatar.file.url}`
            : author.avatar.file.url
        }
        alt=""
      />
    </div>
    <p>{author.firstName}</p>
    <p>{author.lastName}</p>
  </div>
)
