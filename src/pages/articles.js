import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import ArticleList from '../components/article-list'

const Articles = () => (
  <Layout>
    <Content title='Articles'>
      <ArticleList/>
    </Content>
  </Layout>
)

export default Articles