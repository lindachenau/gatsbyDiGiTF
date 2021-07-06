import React from 'react'
import Content from '../components/content'
import { Link } from 'gatsby'

export default () => (
  <Content title='Page not found' titleColor="red">
    <Link to='/'>Home</Link>
  </Content>
)
