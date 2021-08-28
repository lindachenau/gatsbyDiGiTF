import React, { Component } from 'react'
import Intro from '../components/intro'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import Features from '../components/features'
import Card from '../components/card'
import { MDBRow } from 'mdbreact'
import img1 from "../images/wireframe.jpeg"
import img2 from "../images/integration.jpeg"
import img3 from "../images/design.jpeg"

const imgList = [
  {
    name: img1,
    key: "1",
    alt: "First slide",
    title: "Web app development",
    description: "We build super fast beautiful responsive web applications that rival the performance of native apps.",
    link: "/services/progressive-web-apps"
  },
  {
    name: img2,
    key: "2",
    alt: "Second slide",
    title: "Business SW integration",
    description: "We integrate your web applications with your business applications for real-time reporting and business insight.",
    link: "/services/business-sw-integration"
  },
  {
    name: img3,
    key: "3",
    alt: "Third slide",
    title: "Custom UX/UI design",
    description: "We create custom UI solutions to meet client's requirements and solve complex business problems.",
    link: "/services/custom-design"
  }
]

class App extends Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `react`, `web application`, `DiGi Transform`, `digital transformation`]} />
        <Carousel imgList={imgList}/>
        <Intro />
        <Features/>
        <section id="cardSection">
          <h2 className="h1-responsive text-center font-weight-bold mb-5">
            Our services
          </h2>
          <MDBRow className="m-0" center>
            {imgList.map((item) => 
              <Card 
                key={item.key}
                image={item.name}
                title={item.title}
                link={item.link}
                description={item.description}
              />
            )}
          </MDBRow>
        </section>
      </>
    )
  }
}

export default App
