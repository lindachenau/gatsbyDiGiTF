import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Gallery from '../components/gallery'

// const goldenGate = 'https://drive.google.com/uc?export=view&id=1Hgt42t9H1ZchR5kI_mwonvsbJgBK4XOV'
// const alcatraz = 'https://drive.google.com/uc?export=view&id=1m7Y7tAp7u7yRcMzHkQ4cl1C-EVkScuAw'
// const brandstatt = 'https://drive.google.com/uc?export=view&id=1fHdZjm5wGgKny9AOL3TehS8_2S7yV3-n'
// const budapest = 'https://drive.google.com/uc?export=view&id=1aTxm02kCgOUNC0EMK7n52TXjOdSMlxim'
// const donau = 'https://drive.google.com/uc?export=view&id=1KUdfo9hxSKNhOt857q3XPyep7mYBLQxH'
// const durnstein = 'https://drive.google.com/uc?export=view&id=1itGEPR-9tOBVswIN0tRcRU334e0i1SeS'
// const vienna = 'https://drive.google.com/uc?export=view&id=1X9-bOAdg7GzIZsmT4stB--6E6l5EyvNV'
// const prague = 'https://drive.google.com/uc?export=view&id=1jwkFyW8s_Gk7fzX0R-fDnfKmfrOnSpB6'
// const passau = 'https://drive.google.com/uc?export=view&id=1DinWjJFUy7LVI4g1ft2nvUbLXWygutz4'
// const rothenburg = 'https://drive.google.com/uc?export=view&id=1gkgrWrhlmIMyt0lEZeLT7m31gC5saIJB'
// const bubbles = 'https://drive.google.com/uc?export=view&id=1p5w50noIDjZ__Sq2ip27sVJJHBl1kUrJ'
// const boat = 'https://drive.google.com/uc?export=view&id=1uiiW206qQOXtALP2iekttJSMf2JwFsyT'
// const melkAbbey = 'https://drive.google.com/uc?export=view&id=159v80NoUMU2cfNfPu2Db4JqBirtoFCp7'
// const pragueSunset = 'https://drive.google.com/uc?export=view&id=1AfSzKkKYOQZK5sVnx1ZSpkXIUeaA3m_T'
// const bamberg = 'https://drive.google.com/uc?export=view&id=1H6iHBFR0FegvroQHPsUy-Z7EjRdJpIdF'
// const sleepyGavin = 'https://drive.google.com/uc?export=view&id=10c0zerJHBs361gQk6CuOG1f4h6ouXV9b'
// const gavinKennelBW = 'https://drive.google.com/uc?export=view&id=164-HpJfGBtGOMwgANmNrQuD8968qj4fT'
// const gavinKennel = 'https://drive.google.com/uc?export=view&id=1-qz3ESjghrziWVEXn1cQRt27PZfwcvDB'
// const budapestRiver = 'https://drive.google.com/uc?export=view&id=1rw2wCZDA1kPcZlaUFKnoTwevsoehDIJn'
// const oldmanInPark = 'https://drive.google.com/uc?export=view&id=1_OOMvTfmvBqw1HOQjp4xYOqccL--SGqx'
// const miltenberg = 'https://drive.google.com/uc?export=view&id=1jT5Bljikq9qAtQ0hldR21K_8li6YDvzT'
// const daisyField = 'https://drive.google.com/uc?export=view&id=19DfW7yLgBwkTRRnvvBOCnl6eGK8oxZYi'
// const pennanButerfly = 'https://drive.google.com/uc?export=view&id=1PDcyfGJUw_3BfGgfToBh9UMdN55XZBU0'
// const pennanButerfly2 = 'https://drive.google.com/uc?export=view&id=1F_IiBBC-cXLkLNsbp6LlTk50jZ2LEwB-'
// const narooma = 'https://drive.google.com/uc?export=view&id=1n-wA1Ce-UXL4ACiTfWn7KzTsvhezIoOH'

const goldenGate = 'https://ik.imagekit.io/roigtmewkv6/photos/goldenGate_tkgKJzp9gR.JPG'
const alcatraz = 'https://ik.imagekit.io/roigtmewkv6/photos/alcatraz__k96dQ4ZE.JPG'
const brandstatt = 'https://ik.imagekit.io/roigtmewkv6/photos/brandstatt_sGvIHRruZI.jpeg'
const budapest = 'https://ik.imagekit.io/roigtmewkv6/photos/budapest_1__wrJ6JA-8Zs.JPG'
const donau = 'https://ik.imagekit.io/roigtmewkv6/photos/donau_g97-IXW_d.JPG'
const durnstein = 'https://ik.imagekit.io/roigtmewkv6/photos/durnstein_DqZESIP_x-.jpg'
const vienna = 'https://ik.imagekit.io/roigtmewkv6/photos/vienna_WQX7BpUFfI.jpg'
const prague = 'https://ik.imagekit.io/roigtmewkv6/photos/prague_ebHIDEH8fo.JPG'
const passau = 'https://ik.imagekit.io/roigtmewkv6/photos/passau_Prgj-ylCEV.JPG'
const rothenburg = 'https://ik.imagekit.io/roigtmewkv6/photos/rothenburg_omjKArb4s9.JPG'
const bubbles = 'https://ik.imagekit.io/roigtmewkv6/photos/bubbles_E4xC-R2i0.JPG'
const boat = 'https://ik.imagekit.io/roigtmewkv6/photos/boat_9Sq7xZ_n2p.JPG'
const melkAbbey = 'https://ik.imagekit.io/roigtmewkv6/photos/melkAbbey_WoEE1mf98.JPG'
const pragueSunset = 'https://ik.imagekit.io/roigtmewkv6/photos/pragueSunset_9jFQHOcqc.jpg'
const bamberg = 'https://ik.imagekit.io/roigtmewkv6/photos/bamberg_PYuraPt-u.JPG'
const sleepyGavin = 'https://ik.imagekit.io/roigtmewkv6/photos/sleepyGavin_qnKEJzfjf.JPG'
const gavinKennelBW = 'https://ik.imagekit.io/roigtmewkv6/photos/gavinKennelBW_J3qUu7jmc.JPG'
const gavinKennel = 'https://ik.imagekit.io/roigtmewkv6/photos/gavinKennel_A2Rdk-8U0W.JPG'
const budapestRiver = 'https://ik.imagekit.io/roigtmewkv6/photos/budapestRiver_jjYJTrzbR.JPG'
const oldmanInPark = 'https://ik.imagekit.io/roigtmewkv6/photos/oldmanInPark_tRrEC6joh.JPG'
const miltenberg = 'https://ik.imagekit.io/roigtmewkv6/photos/miltenberg_ODCVfLc6fQ.JPG'
const daisyField = 'https://ik.imagekit.io/roigtmewkv6/photos/daisyField_zg2H5b0Box.JPG'
const pennanButerfly = 'https://ik.imagekit.io/roigtmewkv6/photos/pennanButerfly_O8PjMkM7c.JPG'
const pennanButerfly2 = 'https://ik.imagekit.io/roigtmewkv6/photos/pennanButerfly2_cCs_QQVXGI.JPG'
const narooma = 'https://ik.imagekit.io/roigtmewkv6/photos/narooma_aQCoFgdwqx.jpg'

const images = [
  goldenGate, alcatraz, pennanButerfly,
  brandstatt, budapest, donau,
  durnstein, rothenburg, miltenberg,
  prague, passau, pragueSunset,
  melkAbbey, bamberg, gavinKennel, budapestRiver,
  bubbles, gavinKennelBW, vienna,
  oldmanInPark, sleepyGavin, boat, 
  daisyField, pennanButerfly2, narooma
]

const colWidth = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 3]

const Photos = () => (
  <Layout>
    <Content title='My photos'>
      <Gallery images={images} colWidth={colWidth}/>
    </Content>
  </Layout>
)

export default Photos