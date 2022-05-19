import { useEffect, useRef, useState } from "react";
import { PreLoader } from "./styled"
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { Card } from '../components/Projects/Card'
import { Projects } from "../components/Projects";
import { index as Footer } from "../components/Footer";
import { index as Background } from "../components/Background";
import facebook from '../components/Projects/images/facebook.png'
import ecommerce from '../components/Projects/images/ecommerce.png'
import emart from '../components/Projects/images/emart.png'
import netflix from '../components/Projects/images/netflix.png'
import landing from '../components/Projects/images/landing-page.png'


const themeProvider = {
  dark: '#1C1D25',
  light: '#EBEBEB'
}



const App: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
    
  },[])

  return (
    <>
    {/* {loading ? (
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
    : ( */}
    <Background>
      <Navbar/>
      <Main/>
      <Projects>
        {cardData.map((card) => (
          <Card 
             uniq={card.id}
             img={card.img}
             header={card.header}
             paragraph={card.paragraph}
             number={card.number}
             move={card.move}
           />
        ))}
      </Projects>
      <Footer/>
    </Background>
    {/* )} */}
    </>
  );
}


const cardData = [
  {id: 1, img: landing, header: 'Landing Page', paragraph:'Personal Portfolio', number:'01', move: '30px'},
  {id: 2,img: netflix, header: 'Netflix API', paragraph:'Sign In, Sign Up with API Calls', number:'02', move: '-30px'},
  {id: 3,img: facebook, header: 'Facebook Clone', paragraph:'Clone Facebook UI', number:'03', move: '30px'},
  {id: 4,img: emart, header: 'Ecommerce API', paragraph:'With API Calls', number:'04', move: '-30px'},
  {id: 5,img: ecommerce, header: 'Ecommerce', paragraph:'Without API Calls', number:'05', move: '30px'}
]

export default App;
