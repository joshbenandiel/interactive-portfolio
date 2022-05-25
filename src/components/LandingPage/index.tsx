import React, { useEffect, useState } from 'react'
import { Components } from './Components'
import { Main } from './Main'
import { MainProject } from './MainProject'
import { Navbar } from './Navbar'
import { PreLoader } from './PreLoader'
import { Relative } from './styled'
import { index as Footer } from '../Footer/index'


export const LandingPage = () => {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
  return (
    <Relative>
    {loading ? 
      <PreLoader/>
    :(
      <>
        <Navbar/>
        <Main/>
        <MainProject/>
        <Components/>
        <Footer/>
      </>
    )}
    </Relative>
  )
}

