import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Gallery2 from '../components/gallery2'
import axios from "axios"

const Watercolour = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchFileList = async () => {
      const url = process.env.GATSBY_IMAGEKIT_LIST_FILES
      try {
        const config = {
          method: 'post',
          headers: {"Content-Type": "application/json"},
          url: url,
          data: {
            "path" : "watercolour"
          }          
        }      
        const result = await axios(config)
        const imgList = result.data
        /*
        * Sort by image number IMG_XXXX in descending order. The more recent have bigger numbers.
        * URL in imagekit.io https://ik.imagekit.io/roigtmewkv6/watercolour/IMG_3164_J9mA6KGXj.JPG 
        */
        setImages(imgList.sort((a, b) => {
          if (a.substring(51, 55) < b.substring(51, 55))
            return 1
          else
            return -1
          })
        )
      } catch (err) {
        console.log(`imagekit.io file list error @ url ${url}`, err)
      }
    }

    fetchFileList()
  }, []) 

  return (
    <Layout>
      <Content title='Watercolour paintings'>
        <Gallery2 images={images}/>
      </Content>
    </Layout>
  )
}

export default Watercolour