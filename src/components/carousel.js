import React from "react"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact"
import "./carousel.css"

const CarouselPage = ({imgList}) => {
    return (
        <MDBCarousel activeItem={1} length={imgList.length}>
            <MDBCarouselInner>
                {imgList.map( image => 
                    <MDBCarouselItem itemId={image.key} key={image.key}>
                        <MDBView>
                            <img className="d-block w-100" src={image.name} alt={image.alt} />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                    </MDBCarouselItem>
                )}
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
