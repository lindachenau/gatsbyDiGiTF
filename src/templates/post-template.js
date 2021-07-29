import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import Content from '../components/content'

const useStyles = makeStyles((theme) => ({
  inlineImg: {
    float: "left",
    width: "50%",
    height: "auto",
    marginRight: 20,
    marginBottom: 20,
    display: "inline-block",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      display: "block",
      marginRight: 0
    }
  }
}))

export default ({ data, theme }) => {
  const post = data.markdownRemark
  const classes = useStyles(theme)

  return (
    <Content title={post.frontmatter.title}>
      <img src={post.frontmatter.socialImage} className={classes.inlineImg} alt={post.frontmatter.socialImage}/>
      <div className="d-inline" dangerouslySetInnerHTML={{ __html: post.html }}/>
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