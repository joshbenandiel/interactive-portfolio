import { FC } from "react";
import { Background } from "./styled"
import backgroundlogo from '../Main/images/backgroundlogo.png'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import five from './images/5.png'
import six from './images/6.png'
import seven from './images/7.png'
import eight from './images/8.png'
import nine from './images/9.png'
import ten from './images/10.png'
import eleven from './images/11.png'
import twelve from './images/12.png'


interface IProps {
  children: React.ReactNode;
}
export const index: FC<IProps> = ({children}) => {

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
    <Background>
      <>
      <img className='background-logo'src={backgroundlogo} alt="background" />
      <div className='layer-1'>
        <img className='shapes' src={twelve} data-speed={-11}/>
        <img className='shapes' src={ten} data-speed={10}/>
        <img className='shapes' src={eleven} data-speed={8}/>
      </div>
      <div className='layer-2'>
        <img className='shapes' src={six} data-speed={-3}/>
        <img className='shapes' src={five} data-speed={6}/>
        <img className='shapes' src={two} data-speed={4}/>
      </div>
      <div className='layer-3'>
        <img className='shapes' src={nine} data-speed={-7}/>
        <img className='shapes' src={seven} data-speed={-4}/>
        <img className='shapes' src={eight} data-speed={9}/>
      </div>
      <div className='layer-4'>
        <img className='shapes' src={four} data-speed={-8}/> 
        <img className='shapes' src={one} data-speed={-5}/>
        <img className='shapes' src={three} data-speed={2}/>
      </div>
      {children}
      </>
    </Background>
  )
}




