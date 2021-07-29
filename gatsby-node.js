const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
   console.log(`*** I am processing a node with type: ${node.internal.type}`)
   if (node.internal.type === 'MarkdownRemark') {
      const { createNodeField } = actions
      const slug = node.frontmatter.template === 'post' ? `/blog/${node.frontmatter.slug}` :  `/services/${node.frontmatter.slug}`
      createNodeField({
         node,
         name: 'slug',
         value: slug
      })
      if (node.frontmatter.category) {
         const categorySlug = `/category/${node.frontmatter.category.toLowerCase().replace(' ', '-')}/`;
         createNodeField({ node, name: 'categorySlug', value: categorySlug });
       }
   }
}

// Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions

   return new Promise(resolve => {
      graphql(`
      {
         allMarkdownRemark {
            edges {
               node {
                  frontmatter {
                     template
                  }
                  fields {
                     slug
                  }
               }
            }
         }
      }`
      ).then(result => {
         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const template = node.frontmatter.template === 'article' ? './src/templates/article-template.js' : './src/templates/post-template.js'
            createPage({
               path: node.fields.slug,
               component: path.resolve(template),
               context: {
               slug: node.fields.slug,
               },
            })
         })
         resolve()
      })
   })
}