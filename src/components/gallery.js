import React, {useState} from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import './gallery.css'

const Gallery = ({ images, colWidth }) => {
  const [photoIndex, setPhotoIndex] =  useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const renderImages = () => {
    let photoIndex = -1;

    const genSrcSet = (src) => {
      const srcSet = `${src}?tr=w-600 600w, ${src}?tr=w-900 900w, ${src}?tr=w-1200 1200w`
      return srcSet
    }
      
    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md={colWidth[index]} key={photoIndex}>
          <figure className="fig-box">
            <img
              src={imageSrc}
              srcset={genSrcSet(imageSrc)}
              alt="Gallery"
              className="img-fluid z-depth-1"
              loading="lazy"
              onClick={() => {
                setPhotoIndex(privateKey)
                setIsOpen(true)
              }}
            />
          </figure>
        </MDBCol>
      )
    })
  }

  return (
    <MDBContainer className="mt-3" >
      <div className="mdb-lightbox">
        <MDBRow>
          {renderImages()}
        </MDBRow>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
         />
      )}
    </MDBContainer >
  )
}

export default Gallery
