import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const Features = () => {
    return (
        <MDBContainer tag="section" className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5" id="why-us">
                Why choose DiGi Transform for Web App Development?
            </h2>
            <p className="lead w-responsive mx-auto mb-5">
                At DiGi Transform, we are committed to build web solutions that achieve results. 
                Our unique design guarantees once a customer enters your website, he/she will be 
                impressed with the online experience.
            </p>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="code" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Latest technology</h5>
                    <p className="mb-md-0 mb-5">
                        We use the latest web app development stack. Your web solution will be beautiful, 
                        responsive and super fast.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="comments" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Honest advice</h5>
                    <p className="mb-md-0 mb-5">
                        We love to provide honest advice based on our professionalism.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="hands" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Ongoing support</h5>
                    <p className="mb-md-0 mb-5">
                        Have peace of mind for your website after deployment. Our clients rely on 
                        us for ongoing professional support and advice.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Features;
