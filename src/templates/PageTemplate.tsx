import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'

interface PageData {
  contentfulPage: {
    title: string
    slug: string
    articles: {
      slug: string
      title: string
      date: string
    }[]
  }
}

const PageTemplate: React.FC<PageProps<PageData>> = ({ data }) => {
  const { contentfulPage } = data

  if (!contentfulPage) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <h1>{contentfulPage.title}</h1>

      <div>
        {contentfulPage.articles?.map((article) => (
          <div key={article.slug}>
            <Link to={`/${contentfulPage.slug}/${article.slug}`}>
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query GetPageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      articles {
        slug
        title
        date
      }
    }
  }
`

export default PageTemplate
