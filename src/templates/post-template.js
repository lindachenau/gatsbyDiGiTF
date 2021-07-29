import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/content'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Content title={post.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`