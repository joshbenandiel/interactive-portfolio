import { ColorContainer, ComponentsContainer, ComponentsWrapper, FontContainer, NextPage } from "./styled"
import { FC, useEffect } from "react";
import {BsArrowRight} from 'react-icons/bs'
import Aos from "aos";
import { WorkType } from ".";
import { Link } from 'react-router-dom'

interface IProps {
  worksData: WorkType
}
export const Components: FC<IProps> = ({worksData}) => {

  useEffect(() => {
    Aos.init();
  },[])
  return (
    <ComponentsContainer>
      <ComponentsWrapper>
        <div className='components-line'>
          <span/>
        </div>
        <h3 data-aos="fade-up">UI & COMPONENTS</h3>
        <h2 data-aos="fade-up">Design</h2>
        <img className='components-design' data-aos="fade-up" src={worksData.components} alt='landing'></img>
        <ColorContainer 
          one={worksData.colors[0].oneColor}
          two={worksData.colors[1].twoColor}
          three={worksData.colors[2].threeColor}
          four={worksData.colors[3].fourColor}
          five={worksData.colors[4].fiveColor}
        >
          <div data-aos="fade-up" className='color-circle ebony'>
            <p>${worksData.colors[0].one}</p>
          </div>
          <div data-aos="fade-up" className='color-circle mine'>
            <p>${worksData.colors[1].two}</p>
          </div>
          <div data-aos="fade-up" className='color-circle gallery'>
            <p>${worksData.colors[2].three}</p>
          </div>
          <div data-aos="fade-up" className='color-circle white'>
            <p>${worksData.colors[3].four}</p>
          </div>
          <div data-aos="fade-up" className='color-circle denim'>
            <p>${worksData.colors[4].five}</p>
          </div>
        </ColorContainer>
        <FontContainer data-aos="fade-up" data-aos-delay='100'>
          <img src={worksData.imageFont.first} alt="first-font" />
          <img src={worksData.imageFont.second} alt="second-font" />
        </FontContainer>
      </ComponentsWrapper>
      <NextPage first={worksData.nextColor.first} second={worksData.nextColor.second}>
        <Link className='next-link' to={worksData.link}>
          <div>
            <p>Next Projects</p>
            <h1>{worksData.next}</h1>
            <BsArrowRight className='arrow-right-next' size={50}/>
          </div>
        </Link>
      </NextPage>
    </ComponentsContainer>
  )
}
