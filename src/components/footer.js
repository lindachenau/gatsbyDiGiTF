import React, { useState } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"
import { Link } from 'gatsby'
import './footer.css'
import ContactForm from './contact-form'

const Footer = () => {
  const [triggerContact, setTriggerContact] = useState(false)

  return (
    <MDBFooter className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-0 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <Link to='/'>Home</Link>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <Link to='/about'>About us</Link>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <a role="button" onClick={() => setTriggerContact(!triggerContact)}>
              <h6 className="title font-weight-bold">Contact</h6>
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex text-left justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-4">
            <blockquote className="blockquote blockquote-custom p-3 shadow rounded">
              <div className="blockquote-custom-icon bg-info"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-0 font-italic">
                “Your website is the center of your digital eco-system, like a brick and mortar location, 
                the experience matters once a customer enters, just as much as the perception they have 
                of you before they walk through the door.”
              </p>
              <footer className="blockquote-footer pt-3 mt-2 border-top text-white">Leland Dieno in
                <cite title="Source Title"> Socialize Your Small Business: Internet Marketing For Small Business</cite>
              </footer>
            </blockquote>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow>
          <MDBCol md="12">
            <div className="mb-3 flex-center">
              <a href='https://www.facebook.com/linda.chen.18659/' alt="facebook" target='_blank' rel="noreferrer">
                <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4" />
              </a>
              <a href='https://www.linkedin.com/in/linda-yu-ling-chen-1227764/' alt="linkedin" target='_blank' rel="noreferrer">
                <MDBIcon fab icon="linkedin-in" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
              </a>
              <a href='https://www.pinterest.com.au/lchen0263/boards/' alt="pinterest" target='_blank' rel="noreferrer">
                <MDBIcon fab icon="pinterest" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="py-3 d-flex justify-content-center">
          <MDBCol md="4" >
            <div className="text-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <a href='https://www.google.com/maps/place/2+Hillview+Rd,+Eastwood+NSW+2122/@-33.7904974,151.0815816,15z/data=!4m5!3m4!1s0x6b12a439e4dfcc77:0x3184686087efe006!8m2!3d-33.790906!4d151.0815375' alt="" target='_blank' rel="noreferrer">
                2 Hillview Rd, Eastwood 2122, NSW
              </a>
            </div>
          </MDBCol>
          <MDBCol md="4" >
            <div className="text-center">
              <i className="fas fa-briefcase mr-2"></i>
              <span>ABN 47 561 761 043</span>
            </div>
          </MDBCol>          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
          <a href="https://digitransform.com.au" alt=""> DiGi Transform </a>
          <span>All Rights Reserved</span>
        </MDBContainer>
      </div>
      <ContactForm triggerOpen={triggerContact} initOpen={false}/>
    </MDBFooter>
  )
}

export default Footer