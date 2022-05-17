import React from 'react'
import { ArrowDown, Container } from './styled'
import { BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

export const Main = () => {
  return (
    <Container>
      <h1>Joshua Jacinto</h1>
      <p>Front End Developer</p>
      <button>About Me <span>&#10230;</span></button>
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
