import { FC, useEffect, useState } from "react";
import { BackgroundContainer } from "./styled"
import backgroundlogo from '../Main/images/backgroundlogo.png'
// import one from './images/1-min.png'
// import two from './images/2-min.png'
// import three from './images/3-min.png'
// import four from './images/4-min.png'
// import five from './images/5-min.png'
// import six from './images/6-min.png'
// import seven from './images/7-min.png'
// import eight from './images/8-min.png'
// import nine from './images/9-min.png'
import ten from './images/10-min.png'
import eleven from './images/11-min.png'
import twelve from './images/12-min.png'


interface IProps {
  children: React.ReactNode;
  theme: string
}



export const Background: FC<IProps> = ({children, theme}) => {

  
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    setRender(prev => !prev)
  }, [render])
  
  const getShapes = document.querySelectorAll('.shapes')

  document.addEventListener('mousemove', (e) => {
    const parallax = (e: any) => {
      getShapes.forEach((layer: any) => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerWidth - e.pageY*speed)/100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
    parallax(e)
  });



  return (
    <BackgroundContainer theme={theme}>
      <>
      <img className='background-logo'src={backgroundlogo} alt="background"/>
      <div className='layer-1'>
        <img className='shapes' src={twelve} data-speed={-11} alt='shapes'/>
        <img className='shapes' src={ten} data-speed={10} alt='shapes'/>
        <img className='shapes' src={eleven} data-speed={8} alt='shapes'/>
      </div>
      {/* <div className='layer-2'>
        <img className='shapes' src={six} data-speed={-3} alt='shapes'/>
        <img className='shapes' src={five} data-speed={6} alt='shapes'/>
        <img className='shapes' src={two} data-speed={4} alt='shapes'/>
      </div>
      <div className='layer-3'>
        <img className='shapes' src={nine} data-speed={-7} alt='shapes'/>
        <img className='shapes' src={seven} data-speed={-4} alt='shapes'/>
        <img className='shapes' src={eight} data-speed={9} alt='shapes'/>
      </div>
      <div className='layer-4'>
        <img className='shapes' src={four} data-speed={-8} alt='shapes'/> 
        <img className='shapes' src={one} data-speed={-5} alt='shapes'/>
        <img className='shapes' src={three} data-speed={2} alt='shapes'/>
      </div> */}
      {children}
      </>
    </BackgroundContainer>
  )
}




