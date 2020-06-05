import React from 'react'
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact"

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "50vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">DiGi Transform</h2>
                    <hr className="hr-light my-4 w-90" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">
                        Transform your ideas into powerful, enterprise-grade applications, fully customised for your business.
                    </h4>
                    <MDBBtn color="info" href="#featuresDiGiTF"><MDBIcon icon="home" className="mr-2" /> Visit us</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Intro
