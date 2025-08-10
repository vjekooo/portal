import React from 'react'
import { useGetPage } from '../hooks/useGetPage'

interface PageTemplateProps {
  slug: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({ slug }) => {
  const pageData = useGetPage(slug)

  if (!pageData) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      {/* Render your page content */}
    </div>
  )
}

export default PageTemplate
