import React, { useEffect, useState } from 'react'
import { ArrowDown, Container } from './styled'
import { BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

interface IProps {
  openContact: boolean
  setOpenContact: (data: boolean) => void
  worksRef: React.MutableRefObject<any>
  textColor: string
  textColorHover: string
  textColorMain: string
}
export const Main: React.FC<IProps> = ({
  openContact, 
  setOpenContact, 
  worksRef, 
  textColor, 
  textColorHover,
  textColorMain
}) => {

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


  const gotoWorkSection = () => {
    worksRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }
  return (
    <Container textColor={textColor} textColorHover={textColorHover} textColorMain={textColorMain}>
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
          <li><a href="https://www.facebook.com/joshbenandiel/" target="_blank" rel="noreferrer"><FaFacebookF/></a></li>
          <li><a href="https://www.linkedin.com/in/joshua-jacinto-b357541b2/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/joshbenandiel" target='_blank' rel="noreferrer"><BsGithub/></a></li>
          <li><a href="https://www.instagram.com/joshbenandiel/" target='_blank' rel="noreferrer"><BsInstagram/></a></li>
          <li><a href="https://twitter.com/joshbenandiel" target='_blank' rel="noreferrer"><BsTwitter/></a></li>
        </ul>
        <div onClick={gotoWorkSection}>
          <div className='works-section'>Works</div>
          <ArrowDown className='arrow-down'>&#10230;</ArrowDown>
        </div>
      </div>
    </Container>
  )
}
