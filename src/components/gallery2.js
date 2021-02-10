import React, {useState} from "react"
import { MDBContainer } from "mdbreact"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import styles from  './gallery.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const Gallery2 = ({ images }) => {
  const [photoIndex, setPhotoIndex] =  useState(0)
  const [isOpen, setIsOpen] = useState(false)
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    }
  }))
  
  const classes = useStyles()

  const renderImages = () => {
    let photoIndex = -1;
    
    return images.map((tile, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <GridListTile key={tile}>
          <img 
            src={tile} 
            alt="Gallery" 
            onClick={() => {
              setPhotoIndex(privateKey)
              setIsOpen(true)
            }}
            className={styles.figBox}        
          />
        </GridListTile>
      )
    })
  }

  return (
    <MDBContainer className="mt-3" >
      <div className="mdb-lightbox">
        <div className={classes.root}>
          <GridList cellHeight='250' cols={typeof window !== `undefined` && window.innerWidth >= 992 ? 3 : 1}>
            {renderImages()}
          </GridList>
        </div> 
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

export default Gallery2
