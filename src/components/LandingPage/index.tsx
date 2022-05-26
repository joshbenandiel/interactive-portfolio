import React, { useEffect, useState } from 'react'
import { Components } from './Components'
import { Main } from './Main'
import { MainProject } from './MainProject'
import { Navbar } from './Navbar'
import { PreLoader } from './PreLoader'
import { ButtonContainer, Relative } from './styled'
import { index as Footer } from '../Footer/index'
import { Works } from './Works'
import { Contact } from './Contact'
import { MdClose } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { NavOpen, NavOpenFooter } from '../Navbar/styled'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export interface WorkType {
  image: string
  title: string
  desc: string
  projectDesc: string
  components: any
  colors: [
  {one: string, oneColor: string},
  {two: string, twoColor: string},
  {three: string, threeColor: string},
  {four: string, fourColor: string},
  {five: string, fiveColor: string}
  ]
  imageFont: {
    first: string
    second: string
  }
  next: string
  nextColor: {
    first: string,
    second: string
  }
  load: {
    first: string,
    second: string
  },
  link: string,
  visitLink: string
  
}


interface IProps {
  worksData: WorkType
}

export const LandingPage: React.FC<IProps> = ({worksData}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [openWorks, setOpenWorks] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)
  const [openNav, setOpenNav] = useState<boolean>(false)



  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[worksData])
  return (
    <>
    {openWorks && (
      <>
      <ButtonContainer>
        <button className='' onClick={() => setOpenWorks(false)}><MdClose size={30}/>Close</button>
      </ButtonContainer>
      <Works setOpenWorks={setOpenWorks}/>
      </>
    )}
    <Relative>
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
              <Link className='nav-link' to='/'>
                <li>Home</li>
              </Link>
              <li onClick={() => {
                setOpenNav(false)
                setOpenWorks(true)
              }}>All Works</li>
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
      <div className={openWorks ? `fixed-position` : ` `}>
      {loading ? 
        <PreLoader worksData={worksData}/>
      :(
        <>
          {openContact && <Contact setOpenContact={setOpenContact}/>}
          {!openWorks && 
            <Navbar 
              setOpenNav={setOpenNav}
              openWorks={openWorks} 
              setOpenWorks={setOpenWorks} 
              openContact={openContact}
              setOpenContact={setOpenContact}/>
          }
          <Main worksData={worksData} openWorks={openWorks} setOpenWorks={setOpenWorks}/>
          <MainProject worksData={worksData}/>
          <Components worksData={worksData}/>
          <Footer/>
        </>
      )}
      </div>
    </Relative>
    </>
  )
}




