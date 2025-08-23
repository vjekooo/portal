import { Link } from 'gatsby'
import React from 'react'

export interface CardArticle {
  title: string
  date: string
  url: string
  image: string
  readingTime: string
}

interface Props {
  article: CardArticle
}

const formatDate = (date: string) => {
  return new Date(date)
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.')
}

export const TextCard = ({ article }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <Link to={article.url} className="flex gap-3">
        <img src={article.image} className="hover:grow hover:shadow-lg w-1/2" />
        <div className="flex flex-col gap-2 w-1/2">
          <p className="pt-1 text-gray-900 font-semibold text-sm min-h-[52px]">
            {article.title}
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-gray-600 text-sm">{formatDate(article.date)}</p>
            <p className="text-gray-600 text-sm">
              {article.readingTime || '5 min'}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
