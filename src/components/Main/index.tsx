import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown, Container } from './styled'
import { BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import logo from './images/backgroundlogo.png'


export const Main: React.FC = () => {

  const [pause, setPause] = useState<boolean>(true)

  useEffect(() => {
    setPause(false)
    setTimeout(() => {
      setPause(true)
    },1000)
  },[])
  const texts: ScrambleTexts = [
    'Front End Developer'
  ]
  return (
    <Container>
      <h1>Joshua Jacinto</h1>
      <span className='text-wrapper'>
        <TextScramble 
          paused={pause}
          texts={texts} />
        <span/>
      </span>
      <div className='button-wrapper'>
        <button>
          <span className='about-me-text'>About Me</span>
        </button>
        <span className='arrow-right'>&#10230;</span>
        <span className='white-box'></span>
      </div>
      <ul>
        <li><FaFacebookF/></li>
        <li><FaLinkedinIn/></li>
        <li><BsGithub/></li>
        <li><BsInstagram/></li>
        <li><BsTwitter/></li>
      </ul>

      <div className='works-section'>Works</div>
      <ArrowDown className='arrow-down'>&#10230;</ArrowDown>
    </Container>
  )
}
