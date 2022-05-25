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


export const LandingPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [openWorks, setOpenWorks] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)



  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    {openWorks && (
      <>
      <ButtonContainer>
        <button className='' onClick={() => setOpenWorks(false)}><MdClose size={30}/>Close</button>
      </ButtonContainer>
      <Works/>
      </>
    )}
    <Relative>
      <div className={openWorks ? `fixed-position` : ` `}>
      {loading ? 
        <PreLoader/>
      :(
        <>
          {openContact && <Contact setOpenContact={setOpenContact}/>}
          {!openWorks && 
            <Navbar 
              openWorks={openWorks} 
              setOpenWorks={setOpenWorks} 
              openContact={openContact}
              setOpenContact={setOpenContact}/>
          }
          <Main openWorks={openWorks} setOpenWorks={setOpenWorks}/>
          <MainProject/>
          <Components/>
          <Footer/>
        </>
      )}
      </div>
    </Relative>
    </>
  )
}

