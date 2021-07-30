import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/content'

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Content title={article.frontmatter.title}>
      <div style={{ 
        width: '100%', 
        height: '200px', 
        backgroundImage: `Url(https://source.unsplash.com/960x200/?${article.frontmatter.keyword})`, 
        backgroundSize: 'cover', 
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat', 
        marginBottom: '30px' }}>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </Content>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keyword
      }
    }
  }
`