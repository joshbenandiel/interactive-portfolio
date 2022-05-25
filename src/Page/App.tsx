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
  Route
} from "react-router-dom";
import { LandingPage } from "../components/LandingPage";


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



  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
    
  },[])

  



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
      <Route path='landing-page' element={<LandingPage/>}/>
    </Routes>
    </>
  )
}


const cardData = [
  {id: 1, img: landing, header: 'Landing Page', paragraph:'Personal Portfolio', number:'01', move: '30px', link: 'https://joshbenandiel.vercel.app/'},
  {id: 2,img: netflix, header: 'Netflix API', paragraph:'Sign In, Sign Up with API Calls', number:'02', move: '-30px', link: 'https://netflixapi.netlify.app/'},
  {id: 3,img: facebook, header: 'Facebook Clone', paragraph:'Clone Facebook UI', number:'03', move: '30px', link: 'https://facebookclone-five.vercel.app/'},
  {id: 4,img: ecommerce, header: 'Ecommerce', paragraph:'Without API Calls', number:'04', move: '30px', link: 'https://ecommerce-gilt-theta.vercel.app/'},
  {id: 5,img: emart, header: 'Ecommerce API', paragraph:'With API Calls', number:'05', move: '-30px', link: 'https://emart-omega.vercel.app/'},
]

export default App;
