import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
// import the API & graphqlOperation helpers as well as the query
import { API, graphqlOperation } from 'aws-amplify'
import { GetBlog, listBlogs, listPosts } from '../graphql/queries'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const BlogPage = () => {
  const [blog, setBlog] = useState(null)
  const [post, setPost] = useState(null)

  useEffect(() => {

    const getBlog = async () => {
      // const data = await API.graphql(graphqlOperation(GetBlog, { id: "450384eb-5133-41dc-95f9-10e65750ba64" }))
      const blogData = await API.graphql(graphqlOperation(listBlogs))
      console.log('blog successfully fetched', blogData.data.listBlogs.items[0].name)
      const postData = await API.graphql(graphqlOperation(listPosts))
      console.log('blog successfully fetched', postData.data.listPosts.items[0].title)      
      setBlog(blogData.data.listBlogs.items[0].name)
      setPost(postData.data.listPosts.items[0].content)
    }

    getBlog()

  }, [])

  return (
    <Layout>
      <Content title='Blog posts' titleColor="mdb-color">
        {blog && <p>{blog}</p>}
        {post && <p>{post}</p>}
      </Content>
    </Layout>
  )

}

export default BlogPage
