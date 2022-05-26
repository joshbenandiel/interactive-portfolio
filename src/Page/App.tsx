import { useEffect, useState } from "react";
import { ContainerWrapper, PreLoader } from "./styled"
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { Card } from '../components/Projects/Card'
import { Projects } from "../components/Projects";
import { index as Footer } from "../components/Footer";
import { Background } from "../components/Background";
import facebook from '../components/Projects/images/facebook.png'
import ecommerce from '../components/Projects/images/ecommerce.png'
import emart from '../components/Projects/images/emart.png'
import netflix from '../components/Projects/images/netflix.png'
import landing from '../components/Projects/images/landing-page.png'
import { Contact } from "../components/Contact/index";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { LandingPage, WorkType } from "../components/LandingPage";
import landingDesign from '../components/LandingPage/images/landingbackground.png'
import abrilFont from '../components/LandingPage/images/abril-fatface.png'
import gothamFont from '../components/LandingPage/images/gotham.png'
import landingMainImage from '../components/LandingPage/images/background.webp'
import facebookMain from './images/facebookMain.jpeg'
import facebookDesign from '../components/Projects/images/facebook.png'
import latoBold from './images/latobold.png'
import lato from './images/lato.png'
import netflixMain from './images/netflixMain.jpeg'
import netflixDesign from '../components/Projects/images/netflix.png'
import spartan from './images/spartan.png'
import futura from './images/futura.png'
import ecommerceMain from './images/ecommerceMain.webp'
import ecommerceDesign from '../components/Projects/images/ecommerce.png'
import ecommerce2 from '../components/Projects/images/emart.png'
import emartDesign from './images/emart.jpeg'


const themeProvider = {
  dark: '#1C1D25',
  light: '#EBEBEB'
}

const textColor = {
  light: '#4C4F65',
  dark: '#B0B2C3',
}
const textColorMain = {
  light: '#4C4F65',
  dark: '#fff',
}

const textColorHover = {
  light: '#242526',
  dark: '#fff'
}



const App: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)
  const [changeTheme, setChangeTheme] = useState<boolean>(false)
  const [openNav, setOpenNav] = useState<boolean>(false)


  let location = useLocation();
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
    
  },[location])

  



  return (
    <>
    <Routes>
      {/* Home Page */}
      <Route path='/' element={
        <>
        <ContainerWrapper>
        {loading ? (
          <PreLoader>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </PreLoader>
        )
        : (
        <>
          <Background 
            setOpenContact={setOpenContact}
            setOpenNav={setOpenNav}
            openNav={openNav} 
            theme={changeTheme ? themeProvider.light :  themeProvider.dark}>
            {openContact && <Contact 
              openContact={openContact}
              setOpenContact={setOpenContact}/>}
            <div className={`navbar-hide${openContact ? '-false' : ' '}`}>
              <Navbar 
                openNav={openNav}
                setOpenNav={setOpenNav}
                textColor={changeTheme ? textColor.light :  textColor.dark}
                textColorHover = {changeTheme ? textColorHover.light : textColorHover.dark}
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
                setOpenContact={setOpenContact}/>
            </div>
            <Main 
              textColorMain={changeTheme ? textColorMain.light : textColorMain.dark}
              textColor={changeTheme ? textColor.light :  textColor.dark}
              textColorHover = {changeTheme ? textColorHover.light : textColorHover.dark}
              openContact={openContact} 
              setOpenContact={setOpenContact}/>
            </Background>
            <Projects>
              {cardData.map((card) => (
                <Card 
                  button={card.button}
                  key={card.id}
                  id={card.id}
                  link={card.link}
                  img={card.img}
                  header={card.header}
                  paragraph={card.paragraph}
                  number={card.number}
                  move={card.move}
                />
              ))}
            </Projects>
            <Footer/>
          </>
        
        )} 
        </ContainerWrapper>
        </>
      }/>
      {/* Portfolio Page */}
      <Route path='landing-page' element={<LandingPage worksData={landingData}/>}/>
      {/* Facebook Page */}
      <Route path='facebook-clone' element={<LandingPage worksData={facebookData}/>}/>
      {/* Netflix Page */}
      <Route path='netflix' element={<LandingPage worksData={netflixData}/>}/>
      {/* Ecommerce Page */}
      <Route path='ecommerce' element={<LandingPage worksData={ecommerceData}/>}/>
      {/* Ecommerce V2 Page */}
      <Route path='ecommercev2' element={<LandingPage worksData={ecommerceDataV2}/>}/>
    </Routes>
    </>
  )
}

const landingData: WorkType  =
  {
    image: landingMainImage,
    title: 'Landing Page',
    desc: 'Personal Portfolio',
    projectDesc: 'This page is built using HTML, CSS, Javascript, Material-UI, Bootstrap, ReactJs',
    components: landingDesign,
    colors: [
      {one: 'gallery', oneColor: '#ededed'},
      {two: 'mine-shaft', twoColor: '#333333'},
      {three: 'ebony', threeColor: `#060c10`},
      {four: 'white', fourColor: '#fff'},
      {five: 'denim', fiveColor: '#0069a6'}
    ],
    imageFont: {
      first: abrilFont,
      second: gothamFont
    },
    next:'Facebook Clone',
    nextColor: {
      first: '#060c10',
      second: '#00c8e7'
    },
    load: {
      first: '#0069a6',
      second: '#060c10'
    },
    link: '/facebook-clone'
  }


const facebookData: WorkType = 
  {
    image: facebookMain,
    title: 'Facebook',
    desc: 'Clone Facebook Home Page UI',
    projectDesc: 'This page is built using HTML, CSS, Javascript, Material-UI, Styled Components, ReactJs, Typescript',
    components: facebookDesign,
    colors: [
      {one: 'ship-cove', oneColor: '#7B96C4'},
      {two: 'egg-blue', twoColor: '#00C8E7'},
      {three: 'ebony-clay', threeColor: `#292F43`},
      {four: 'catskill-white', fourColor: '#EDF3F7'},
      {five: 'white', fiveColor: '#fff'}
    ],
    imageFont: {
      first: latoBold,
      second: lato
    },
    next:'Netflix',
    nextColor: {
      first: '#292f43',
      second: '#d16335'
    },
    load: {
      first: '#292F43',
      second: '#00C8E7'
    },
    link: '/netflix'
  }
const netflixData: WorkType = 
{
  image: netflixMain,
  title: 'Netflix',
  desc: 'Login and Register with RESTful API',
  projectDesc: 'This page is built using HTML, CSS, Javascript, Material-UI, Bootstrap, ReactJs',
  components: netflixDesign,
  colors: [
    {one: 'mocha', oneColor: `#6e3219`},
    {two: 'forest-green', twoColor: '#1d972d'},
    {three: 'flame-pea', threeColor: '#d16335'},
    {four: 'white', fourColor: '#fff'},
    {five: 'pearl-bush', fiveColor: '#ece6da'}
  ],
  imageFont: {
    first: spartan,
    second: futura
  },
  next:'Ecommerce',
  nextColor: {
    first: '#d16335',
    second: '#1d972d'
  },
  load: {
    first: '#ece6da',
    second: '#d16335'
  },
  link: '/ecommerce'
}

const ecommerceData: WorkType = 
{
  image: ecommerceMain,
  title: 'Ecommerce',
  desc: 'Built without RESTful API',
  projectDesc: 'This page is built using HTML, CSS, Javascript, Material-UI, Bootstrap, ReactJs',
  components: ecommerceDesign,
  colors: [
    {one: 'mine-shaft', oneColor: `#222222`},
    {two: 'dove-gray', twoColor: '#686868'},
    {three: 'tall-poppy', threeColor: '#c62b2e'},
    {four: 'fern', fourColor: '#71b45b'},
    {five: 'white', fiveColor: '#fff'}
  ],
  imageFont: {
    first: latoBold,
    second: lato
  },
  next:'Ecommerce 2',
  nextColor: {
    first: '#c62b2e',
    second: '#222222'
  },
  load: {
    first: '#71b45b',
    second: '#c62b2e'
  },
  link: '/ecommercev2'
}

const ecommerceDataV2: WorkType = 
{
  image: emartDesign,
  title: 'Ecommerce 2',
  desc: 'Built with RESTful API',
  projectDesc: 'This page is built using HTML, CSS, Javascript, Material-UI, Bootstrap, ReactJs',
  components: ecommerce2,
  colors: [
    {one: 'mine-shaft', oneColor: `#222222`},
    {two: 'dove-gray', twoColor: '#686868'},
    {three: 'tall-poppy', threeColor: '#c62b2e'},
    {four: 'fern', fourColor: '#71b45b'},
    {five: 'white', fiveColor: '#fff'}
  ],
  imageFont: {
    first: spartan,
    second: futura
  },
  next:'Landing Page',
  nextColor: {
    first: '#c62b2e',
    second: '#222222'
  },
  load: {
    first: '#71b45b',
    second: '#c62b2e'
  },
  link: '/landing-page'
}



const cardData = [
  {id: 1, img: landing, header: 'Landing Page', paragraph:'Personal Portfolio', number:'01', move: '30px', link: 'landing-page', button: 'Case Study'},
  {id: 2,img: facebook, header: 'Facebook Clone', paragraph:'Clone Facebook UI', number:'02', move: '30px', link: 'facebook-clone', button: 'Case Study'},
  {id: 3,img: netflix, header: 'Netflix API', paragraph:'Sign In, Sign Up with API Calls', number:'03', move: '-30px', link: 'netflix', button: 'Case Study'},
  {id: 4,img: ecommerce, header: 'Ecommerce', paragraph:'Without API Calls', number:'04', move: '30px', link: 'ecommerce', button: 'Case Study'},
  {id: 5,img: emart, header: 'Ecommerce API', paragraph:'With API Calls', number:'05', move: '-30px', link: 'ecommercev2', button: 'Case Study'},
]

export default App;
