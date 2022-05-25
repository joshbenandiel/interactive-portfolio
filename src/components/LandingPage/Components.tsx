import { ColorContainer, ComponentsContainer, ComponentsWrapper, FontContainer, NextPage } from "./styled"
import image from './images/landingbackground.png'
import { useEffect } from "react";
import fontOne from './images/abril-fatface.png'
import fontTwo from './images/gotham.png'
import {BsArrowRight} from 'react-icons/bs'

import Aos from "aos";

export const Components = () => {

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
        <img className='components-design' data-aos="fade-up" src={image} alt='landing'></img>
        <ColorContainer data-aos="fade-up">
          <div className='color-circle ebony'>
            <p>$ebony</p>
          </div>
          <div className='color-circle mine'>
            <p>$mine-shaft</p>
          </div>
          <div className='color-circle gallery'>
            <p>$mine-gallery</p>
          </div>
          <div className='color-circle white'>
            <p>$mine-white</p>
          </div>
          <div className='color-circle denim'>
            <p>$mine-denim</p>
          </div>
        </ColorContainer>
        <FontContainer data-aos="fade-up" data-aos-delay='100'>
          <img src={fontOne} alt="abril" />
          <img src={fontTwo} alt="gotham" />
        </FontContainer>
      </ComponentsWrapper>
      <NextPage>
        <div>
          <p>Next Projects</p>
          <h1>Facebook Clone</h1>
          <BsArrowRight className='arrow-right-next' size={50}/>
        </div>
      </NextPage>
    </ComponentsContainer>
  )
}
