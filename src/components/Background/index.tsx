import { FC, useEffect, useState } from "react";
import { BackgroundContainer } from "./styled"
import backgroundlogo from '../Main/images/backgroundlogo.png'
import one from './images/1-min.png'
import two from './images/2-min.png'
import three from './images/3-min.png'
import four from './images/4-min.png'
import five from './images/5-min.png'
import six from './images/6-min.png'
import seven from './images/7-min.png'
import eight from './images/8-min.png'
import nine from './images/9-min.png'
import ten from './images/10-min.png'
import eleven from './images/11-min.png'
import twelve from './images/12-min.png'
import oneBg from './newimages/1.1-removebg-preview.png'
import twoBg from './newimages/2.1-removebg-preview.png'
import threeBg from './newimages/3.1-removebg-preview.png'
import fourBg from './newimages/4.1-removebg-preview.png'
import fiveBg from './newimages/5.1-removebg-preview.png'
import sixBg from './newimages/6.1-removebg-preview.png'
import sevenBg from './newimages/7.1-removebg-preview.png'
import eightBg from './newimages/8.1-removebg-preview.png'
import nineBg from './newimages/9.1-removebg-preview.png'
import tenBg from './newimages/10.1-removebg-preview.png'
import elevenBg from './newimages/11.1-removebg-preview.png'
import twelveBg from './newimages/12.1-removebg-preview.png'
import { useMouseMove } from 'react-use-mouse-move';
import { NavOpen, NavOpenFooter } from "../Navbar/styled";
import {AiOutlineClose} from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link , animateScroll as scroll} from 'react-scroll'


interface IProps {
  children: React.ReactNode
  theme: string
  openNav: boolean
  setOpenNav: (data: boolean) => void
  setOpenContact: (data: boolean) => void
}



export const Background: FC<IProps> = ({children, theme, openNav, setOpenNav, setOpenContact}) => {

  
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    setRender(prev => !prev)
  }, [])
  

  
  
  const pos1 = useMouseMove(1)
  useEffect(() => {
    const getShapes = document.querySelectorAll('.shapes')
    getShapes.forEach((layer: any) => {
      const speed = layer.getAttribute('data-speed')
      const x = (window.innerWidth - pos1.x*speed)/100
      const y = (window.innerWidth - pos1.y*speed)/100
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  },[pos1])

  


  
  return (
    <>
    <NavOpen 
      show={openNav ? '200' : '1'}
      scale={openNav ? '1.2' : '0'} 
      open={openNav ? 'translateX(0px)' : 'translateX(-450px)'}>
      <div className='blue-mask-nav'>
        {openNav && (
          <>
          <button onClick={() => setOpenNav(false)}>
              <AiOutlineClose className='close-button-nav' size={40} color='#BDBEC5'/>
          </button>
          <ul className='ul-nav'>
            <li onClick={() => {
              setOpenNav(false)
              scroll.scrollToTop()
            }}>Home</li>
            <Link to='personal'>
              <li onClick={() => setOpenNav(false)}>Personal Projects</li>
            </Link>
            <Link to='technologies'>
              <li onClick={() => setOpenNav(false)}>Technologies Used</li>
            </Link>
            <li onClick={() => {
              setOpenNav(false)
              setOpenContact(true)
            }}>Contact</li>
          </ul>
          <NavOpenFooter>
            <ul className='ul'>
              <li onClick={() => setOpenNav(false)}><a href="https://www.facebook.com/joshbenandiel/" target="_blank" rel="noreferrer"><FaFacebookF/></a></li>
              <li onClick={() => setOpenNav(false)}><a href="https://www.linkedin.com/in/joshua-jacinto-b357541b2/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a></li>
              <li onClick={() => setOpenNav(false)}><a href="https://github.com/joshbenandiel" target='_blank' rel="noreferrer"><BsGithub/></a></li>
              <li onClick={() => setOpenNav(false)}><a href="https://www.instagram.com/joshbenandiel/" target='_blank' rel="noreferrer"><BsInstagram/></a></li>
              <li onClick={() => setOpenNav(false)}><a href="https://twitter.com/joshbenandiel" target='_blank' rel="noreferrer"><BsTwitter/></a></li>
            </ul>
          </NavOpenFooter>
          </>
        )}
      </div>
      <div className='orange-mask-nav'/>
    </NavOpen>
    <BackgroundContainer theme={theme}>
      <img className='background-logo'src={backgroundlogo} alt="background"/>
      <div className='layer-1'>
        <img className='shapes one' src={twelveBg} data-speed={-11} alt='shapes'/>
        <img className='shapes two' src={tenBg} data-speed={10} alt='shapes'/>
        <img className='shapes three' src={elevenBg} data-speed={-6} alt='shapes'/>
      </div>
      <div className='layer-2'>
        <img className='shapes four' src={sixBg} data-speed={-3} alt='shapes'/>
        <img className='shapes five' src={fiveBg} data-speed={6} alt='shapes'/>
        <img className='shapes six' src={twoBg} data-speed={4} alt='shapes'/>
      </div>
      <div className='layer-3'>
        <img className='shapes seven' src={nineBg} data-speed={-7} alt='shapes'/>
        <img className='shapes eight' src={sevenBg} data-speed={-4} alt='shapes'/>
        <img className='shapes nine' src={eightBg} data-speed={9} alt='shapes'/>
      </div>
      <div className='layer-4'>
        <img className='shapes ten' src={fourBg} data-speed={-8} alt='shapes'/> 
        <img className='shapes eleven' src={oneBg} data-speed={-5} alt='shapes'/>
        <img className='shapes twelve' src={threeBg} data-speed={2} alt='shapes'/>
      </div>
      {children}
    </BackgroundContainer>
    </>
  )
}




