import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Gallery2 from '../components/gallery2'

const Watercolour = ({location}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const prefix = 'https://drive.google.com/uc?export=view&id='
    //Remove the key property added by Gatsby
    delete location.state.key

    setImages(Object.values(location.state).sort((a, b) => {
      if (a.name < b.name)
        return 1
      else
        return -1
      })
      .map(img => `${prefix}${img.id}`)
    )

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