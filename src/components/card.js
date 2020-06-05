import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { navigate } from "gatsby"

const Card = ({image, title, description, link}) => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{description}</MDBCardText>
                    <MDBBtn color='info' onClick={() => navigate(link)}>Read</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Card
