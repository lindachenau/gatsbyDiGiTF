import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from './article'

export default () => (
   <StaticQuery

      query = { graphql `query {
         allMarkdownRemark(
            filter: { frontmatter: { template: { eq: "article" }} },
            sort: {fields: [frontmatter___sequence], order: ASC}
            ) {
           totalCount
           edges {
             node {
               fields {
                  slug
               }
               id
               frontmatter {
                 title
                 subTitle
                 sequence
                 keyword
               }
               excerpt
             }
           }
         }
       }`

      }

      render = { data => (
         <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <Article key={node.id}
                  to={node.fields.slug}
                  keyword={node.frontmatter.keyword}
                  title={node.frontmatter.title}
                  subTitle={node.frontmatter.subTitle}
                  excerpt={node.excerpt} />
            ))}
         </div>
      )}

   />
)