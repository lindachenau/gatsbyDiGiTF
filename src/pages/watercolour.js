import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Gallery2 from '../components/gallery2'

const Watercolour = ({location}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    //Remove the key property added by Gatsby
    if (location.state) {
      delete location.state.key
      setImages(Object.values(location.state).sort((a, b) => {
        if (a.name < b.name)
          return 1
        else
          return -1
        })
      )
      }
  }, [location.state]) 

  return (
    <Layout>
      <Content title='Watercolour paintings'>
        <Gallery2 images={images}/>
      </Content>
    </Layout>
  )
}

export default Watercolour