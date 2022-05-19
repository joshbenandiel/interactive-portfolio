import React, { useEffect, useState } from 'react'
import { ArrowDown, Container } from './styled'
import { BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

interface IProps {
  openContact: boolean
  setOpenContact: (data: boolean) => void
}
export const Main: React.FC<IProps> = ({openContact, setOpenContact}) => {

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
      <div className={`contact-hide${openContact ? `-false`: ''}`}>
        <div className='name-wrapper'>
          <h1>Joshua Jacinto</h1>
          <span className='white-name'></span>
        </div>
        <span className='text-wrapper'>
          <TextScramble 
            className='text-label'
            paused={pause}
            texts={texts} />
          <span className='white-text-wrapper'/>
        </span>
        <div className='button-wrapper'>
          <button onClick={() => setOpenContact(true)}>
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
      </div>
    </Container>
  )
}
