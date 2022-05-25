import React, { useEffect, useState } from 'react'
import { Components } from './Components'
import { Main } from './Main'
import { MainProject } from './MainProject'
import { Navbar } from './Navbar'
import { PreLoader } from './PreLoader'
import { Relative } from './styled'
import { index as Footer } from '../Footer/index'
import { Works } from './Works'
import { Contact } from './Contact'


export const LandingPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [openWorks, setOpenWorks] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)

  console.log(openContact)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    
    <Relative>
    {loading ? 
      <PreLoader/>
    :(
      <>
        {openWorks && <Works/>}
        {openContact && <Contact setOpenContact={setOpenContact}/>}
        <Navbar 
          openWorks={openWorks} 
          setOpenWorks={setOpenWorks} 
          openContact={openContact}
          setOpenContact={setOpenContact}/>
        <Main openWorks={openWorks} setOpenWorks={setOpenWorks}/>
        <MainProject/>
        <Components/>
        <Footer/>
      </>
    )}
    </Relative>
    </>
  )
}

