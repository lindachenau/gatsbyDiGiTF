import React from 'react'
import { Link } from 'gatsby'

const Feed = ({ edges }) => (
  <>
    {edges.map((edge) => (
      <div key={edge.node.fields.slug}>
        <time dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
        { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
        </time>
        <span className='orange-text font-weight-bold ml-2'>
          {edge.node.frontmatter.category}
        </span>
        <h4 className='h4-responsive text-left mt-1'>
          {edge.node.frontmatter.title}
        </h4>
        <p>{edge.node.frontmatter.description}</p>
        <Link to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </>
)

export default Feed