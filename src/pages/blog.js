import React from 'react'
import Content from '../components/content'
import Feed from '../components/feed'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Content title='Blog posts' titleColor="mdb-color">
      <Feed edges={edges}/>
    </Content>
  )

}

export const query = graphql`
  query IndexTemplate {
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: {ne: true}} },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
// export const query = graphql`
//   query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
//     allMarkdownRemark(
//         limit: $postsLimit,
//         skip: $postsOffset,
//         filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
//         sort: { order: DESC, fields: [frontmatter___date] }
//       ){
//       edges {
//         node {
//           fields {
//             slug
//             categorySlug
//           }
//           frontmatter {
//             title
//             date
//             category
//             description
//           }
//         }
//       }
//     }
//   }
// `
export default BlogPage
