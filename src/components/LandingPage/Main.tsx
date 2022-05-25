import { Background, BackgroundText } from './styled'
import image from './images/background.webp'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import { useEffect, useState } from 'react'
import Aos from 'aos'


interface IProps {
  openWorks: boolean;
  setOpenWorks: (data: boolean) => void
}


export const Main:React.FC<IProps> = ({openWorks, setOpenWorks}) => {
  const [pause, setPause] = useState<boolean>(true)

  useEffect(() => {
    setPause(false)
    setTimeout(() => {
      setPause(true)
    },1000)
  },[])

  useEffect(() => {
    Aos.init();
  },[])



  const front: ScrambleTexts = [
    'FRONT-END DEVELOPER'
  ]
  const web: ScrambleTexts = [
    'WEBSITE DESIGN'
  ]
  const year: ScrambleTexts = [
    'YEAR 2022'
  ]
  const role: ScrambleTexts = [
    'ROLE'
  ]
  const context: ScrambleTexts = [
    'CONTEXT'
  ]
  const period: ScrambleTexts = [
    'PERIOD'
  ]

  
  return (
    <Background>
      <img src={image} alt='landing'/>
      <div className='background-wrapper'>
      </div>
      <BackgroundText>
        <div className='background-text-wrapper'>
          <div className='title-text'>
            <h1>Landing Page</h1>
            <h3>Personal Portfolio</h3>
          </div>
          <ul data-aos="fade-up" className='footer'>
            <li><TextScramble className='text-label' paused={pause} texts={role}/><span><TextScramble className='text-label' paused={pause} texts={front}/></span></li>
            <li><TextScramble className='text-label' paused={pause} texts={context}/><span><TextScramble className='text-label' paused={pause} texts={web}/></span></li>
            <li><TextScramble className='text-label' paused={pause} texts={period}/><span><TextScramble className='text-label' paused={pause} texts={year}/></span></li>
          </ul>
        </div>
      </BackgroundText>
    </Background>
  )
}