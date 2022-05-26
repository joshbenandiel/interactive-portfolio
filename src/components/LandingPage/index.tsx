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
  link: string
  
}


interface IProps {
  worksData: WorkType
}

export const LandingPage: React.FC<IProps> = ({worksData}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [openWorks, setOpenWorks] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)



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
      <Works/>
      </>
    )}
    <Relative>
      <div className={openWorks ? `fixed-position` : ` `}>
      {loading ? 
        <PreLoader worksData={worksData}/>
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




