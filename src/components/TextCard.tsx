import { Link } from 'gatsby'
import React from 'react'

export interface CardArticle {
  title: string
  date: string
  url: string
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
      <Link to={article.url}>
        <p className="pt-1 text-gray-900 font-semibold text-base min-h-[40px]">
          {article.title}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-600 text-sm">{formatDate(article.date)}</p>
          <p className="text-gray-600 text-sm">
            {article.readingTime || '5 min'}
          </p>
        </div>
      </Link>
    </div>
  )
}
