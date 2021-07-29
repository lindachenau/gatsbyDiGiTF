import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/content'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Content title={post.frontmatter.title}>
      <img src={post.frontmatter.socialImage} className="d-inline-block" alt={post.frontmatter.socialImage}/>
      <div className="d-inline" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        socialImage
      }
    }
  }
`