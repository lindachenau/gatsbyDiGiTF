import React from 'react'
import Content from '../components/content'
import { Link } from 'gatsby'

const NotFound =  () => (
  <Content title='Page not found' titleColor="red">
    <Link to='/'>Home</Link>
  </Content>
)

export default NotFound