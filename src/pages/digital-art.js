import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Gallery from '../components/gallery'

const bushwalk = 'https://drive.google.com/uc?export=view&id=1XpuAS_HdKYyLKAGZGBLO4p0pmJw75scH'
const orchid = 'https://drive.google.com/uc?export=view&id=1yfKiLf7JfuHqn9ATLbL9A57xQWf1m5-L'
const goldWoman = 'https://drive.google.com/uc?export=view&id=1ngysrfq3-trYYXko2-JB9kh0VBT_ls9J'
const nanzenji = 'https://drive.google.com/uc?export=view&id=1j4eibKxqONyqQwRH8ZQVXrU59aQKdHCR'
const violinist = 'https://drive.google.com/uc?export=view&id=1Y9K_TOppnjw4KMj1K6XzpHWM3txA19n5'
const passau = 'https://drive.google.com/uc?export=view&id=1gDbwDpjQWdSeGEjap6eBt95FWWjgZUTp'
const rothenburg = 'https://drive.google.com/uc?export=view&id=1PTuxBHEsqqwbtFaT1cLLIjg51jCgxgiU'
const mountain = 'https://drive.google.com/uc?export=view&id=1xDO3q8LCtshfSA-eTxb01KusYyWPtxji'
const selfiests = 'https://drive.google.com/uc?export=view&id=1LZIGRLdiLOuA1JYlfPaVEnqVs_nbSan4'
const ladyInRed = 'https://drive.google.com/uc?export=view&id=1x_oJq8GyhHiY4WVgmq1eZTnqFVCnvLdI'
const littleGirl = 'https://drive.google.com/uc?export=view&id=1utuhXxtg-qhL-k8mRsMX-jjAtL7SzQlF'
const mum = 'https://drive.google.com/uc?export=view&id=1H2oyGpuuccRsZ80BXQi_TAcUZIf3hgdz'
const girlAndMum = 'https://drive.google.com/uc?export=view&id=1ItW3DdajLWFaPGUHWv8X8QaDi2TphWT8'
const encounter = 'https://drive.google.com/uc?export=view&id=1kZbt0DOOxxZ9VfSwlusn6e1P29gOtGOQ'
const flowerLady = 'https://drive.google.com/uc?export=view&id=11tKOOdLN2DtTcGAQXAKZ2sNcnXvTj8Gc'
const bikeLady = 'https://drive.google.com/uc?export=view&id=1JmvuzjPpFzDFTSzfdmqvvll0Km-xT1TT'
const butterfly = 'https://drive.google.com/uc?export=view&id=1EOb-tvMW6Wk91SYRSdr-ZK4XbvtALfjw'
const gavinWaiting = 'https://drive.google.com/uc?export=view&id=1PH0zgNFHzBwvH1V2V_T-jJTQQ1LBP4WI'
const lookBack = 'https://drive.google.com/uc?export=view&id=1BUxOOrjxGXrP48tyIm3TI32w6OLmSzpO'
const artistsOnBridge = 'https://drive.google.com/uc?export=view&id=1GsZbxX12ujHH-U74CtgMTsCllECjfRsf'
const shadow = 'https://drive.google.com/uc?export=view&id=1AeNziUsPiYAhcYDKrVLDpCDgi3_eef00'
const postcard = 'https://drive.google.com/uc?export=view&id=1mRPNB874pa7qZ_tEf7yAnL4D79E9-hkl'
const dancer2 = 'https://drive.google.com/uc?export=view&id=1XRgnMmvwKnmSEk37B-uMPVE2cnrTI2th'
const scribble = 'https://drive.google.com/uc?export=view&id=12sNfoxKYvMryttKnDI6RTk5uJWyXh6eQ'
const lake = 'https://drive.google.com/uc?export=view&id=1btTzPH_BTIfbvwTCYqCjaYg_N_R1EWM5'
const dancerRed = 'https://drive.google.com/uc?export=view&id=1ELG_EFKBcTvoFZMn1gXZBdS7HxHej-lb'
const orchidWind = 'https://drive.google.com/uc?export=view&id=1ucap6zlk1wjkhrs6DQYfzv2PftaXUn7n'
const praguePalace = 'https://drive.google.com/uc?export=view&id=12_LsGzwQ6vXkLGHKrE8vPge7-i8RhRuH'
const daisies = 'https://drive.google.com/uc?export=view&id=1rSgUKfOaWkbkYJWCLye7RvcqEl03hKor'
const deathHill = 'https://drive.google.com/uc?export=view&id=1lvz9Ksl1sx7DtXVjyzWi8ewYn0CeFN1L'
const budapest = 'https://drive.google.com/uc?export=view&id=1TX-MLbbm3MExLT8vSKHJKdS1cwdB6AbG'
const charlesBridge = 'https://drive.google.com/uc?export=view&id=1RWY6GyhJyDfvBIJZnRKMf-MnxgAK2DPe'
const kaiDurnstein = 'https://drive.google.com/uc?export=view&id=17sbk5zl5nJONpwL-NAyC1Kc4t-BwW8u9'
const boyDuck = 'https://drive.google.com/uc?export=view&id=1O4saHMFvUuPGyqextsSkOipQNa186EYV'
const girlDog = 'https://drive.google.com/uc?export=view&id=1-60Hk381KpVhH9NSGPDaAWBd_xTwBk4H'
const followMe = 'https://drive.google.com/uc?export=view&id=1D3cQW_NztbwoSmWPmw2y_-z2iXCzeIzj'
const dream = 'https://drive.google.com/uc?export=view&id=1snRspdb_VCDDV6BaUlVGtD7EZZy_XPbR'
const roses = 'https://drive.google.com/uc?export=view&id=1MXnTg9E59d5XQNMdeo8Az9kyf-TglRfS'
const rain = 'https://drive.google.com/uc?export=view&id=1Trs64J7i0d5vPv9CTXHsugwIeSmecpSu'
const palaceMusicians = 'https://drive.google.com/uc?export=view&id=1xpb7FsJtIuS-Sq5rcV52hnMUGjuXkXZ1'
const beach = 'https://drive.google.com/uc?export=view&id=1gybIW81xyE8g3Fhjgwr7AdtaPxJlfIiI'
const catwalk = 'https://drive.google.com/uc?export=view&id=1rWmSXKx-M_7yUuk-aFltp9X1Af7gIjMV'
const countrySite = 'https://drive.google.com/uc?export=view&id=1DAlMuoDdwOMDqsfFJp6HCwH84t5swYgR'
const dancing = 'https://drive.google.com/uc?export=view&id=1SSXhuPzbrJLmNms9jEuZIW3Y50WoSOaU'
const gavinButterfly = 'https://drive.google.com/uc?export=view&id=1aT_daJwy1Na6yGm8cEQtEXsDhIGncWob'
const gavinFight = 'https://drive.google.com/uc?export=view&id=1QHQmovfyKknddJszkMNlrQjWzyIlIy7O'
const girlHorse = 'https://drive.google.com/uc?export=view&id=1h0oUhML5yHWweWuL0mslJEjX59ZcunQz'
const monkeys = 'https://drive.google.com/uc?export=view&id=1MnrjHPlb-8D6vm_doUwItFSkoVCOr_si'
const musing = 'https://drive.google.com/uc?export=view&id=10aGSLJ5EUxFw5vr2EMLw1YiTflNXUFsg'
const musing2 = 'https://drive.google.com/uc?export=view&id=1flvufsp8_hJK-mJhEqYaIbJZupKCeMbK'
const palaceLivingRoom = 'https://drive.google.com/uc?export=view&id=1KtmIx9HV5t5CP8cQ5K29F2AbALKHHfsF'
const palaceTea = 'https://drive.google.com/uc?export=view&id=10polGQYhxPQo3aQqoqEWiDrJJYP4wIDR'
const rothenburg2 = 'https://drive.google.com/uc?export=view&id=1FEXoZZoeFNM-i4jqAXxFZWaB2EepTeij'
const sketch = 'https://drive.google.com/uc?export=view&id=1PHs-fsWSjxvHZoUqiyfiRTzgDm_hB9Gf'
const swans = 'https://drive.google.com/uc?export=view&id=1ub64evBJv-GAtT0hrnAzW8p1MNdRF44n'
const teaCup = 'https://drive.google.com/uc?export=view&id=1qLAXB1-e0zhLazvCyVaFJb_tJyRj01zm'
const temple = 'https://drive.google.com/uc?export=view&id=1hmNVKvHNh9PDNVBkahps-PPUXx98fznZ'
const temple2 = 'https://drive.google.com/uc?export=view&id=1vldkn1tULOhdfv710U9PcXJTqbtfKTrg'
const tunnel = 'https://drive.google.com/uc?export=view&id=13lsbWNcR5Wyb_oqMQnTqjhQICFQUqaZa'
const unreal = 'https://drive.google.com/uc?export=view&id=1hdFMEGzs9hQ_RcNiD_eYGBf7iYvK5HvM'
const violinist2 = 'https://drive.google.com/uc?export=view&id=1OhZT_9Lq8BaUqHF-5MfQH7hMMQ5KyAyy'
const wolf = 'https://drive.google.com/uc?export=view&id=1L0TpFl2MFcv4V556yvKFzsKvqBnQvSF7'


const images = [
  violinist, littleGirl, girlAndMum, scribble,
  selfiests, dancer2, girlDog, ladyInRed,
  bushwalk, orchidWind, mum, budapest,
  praguePalace, daisies, deathHill, lake,
  rothenburg, butterfly, mountain, orchid, 
  lookBack, nanzenji, artistsOnBridge, encounter, 
  flowerLady, bikeLady, kaiDurnstein, followMe, 
  boyDuck, palaceMusicians, postcard, dream,
  goldWoman, passau, charlesBridge, rain, 
  gavinWaiting, shadow, roses, dancerRed,
  musing2, sketch, temple2, gavinButterfly,
  beach, gavinFight, palaceTea, rothenburg2,
  musing, tunnel, monkeys, temple2,
  dancing, teaCup, monkeys, palaceLivingRoom,
  countrySite, girlHorse, swans, temple,
  catwalk, violinist2, unreal, wolf
]

const colWidth = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 3]

const DigitalArt = () => (
  <Layout>
    <Content title='Digital art'>
      <Gallery images={images} colWidth={colWidth}/>
    </Content>
  </Layout>
)

export default DigitalArt