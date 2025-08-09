import { graphql, useStaticQuery } from 'gatsby'

export const useGetAllArticles = () => {
  const {
    allContentfulBlogPost: { nodes },
  } = useStaticQuery(graphql`
    query allBlogPostsQuery {
      allContentfulBlogPost(
        sort: { fields: createdAt, order: DESC }
        limit: 3
      ) {
        nodes {
          title
          date
          image {
            gatsbyImageData(width: 200)
          }
          text {
            raw
          }
        }
      }
    }
  `)
  return nodes
}
