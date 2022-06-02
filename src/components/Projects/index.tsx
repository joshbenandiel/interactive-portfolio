import { FC, useEffect, useRef, useState } from 'react'
import {Container, LightBlueMask, Line, OrangeMask, Wrapper } from './styled'
import bootstrap from './images/bootstrap.png'
import css from './images/css.png'
import html from './images/html.png'
import javascript from './images/javascript.png'
import material from './images/material.png'
import react from './images/react.png'
import redux from './images/redux.png'
import styled from './images/styled.png'
import typescript from './images/typescript.png'
import { Element } from 'react-scroll'
import one from './shapes/1.0-removebg-preview.png'
import two from './shapes/2.0-removebg-preview.png'
import three from './shapes/3.0-removebg-preview.png'
import four from './shapes/4.0-removebg-preview.png'
import five from './shapes/5.0-removebg-preview.png'
import six from './shapes/6.0-removebg-preview.png'


interface ProjectsProps {
  children: React.ReactNode
}

export const Projects:FC<ProjectsProps> = ({children}) => {



  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [render, setRender] = useState<boolean>(false)
  const ref = useRef(null)
 
  useEffect(() => {
    setRender(prev => !prev)
    const observer = new IntersectionObserver(
      ([entries]) => {
        if(entries.isIntersecting){
          setIsVisible(true);
        }
      },{rootMargin: "-200px",}
    );
    observer.observe(ref.current)
  }, [])


  return (
    <Container>
      <Wrapper>
        <div className='shapes-left-content'>
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
          <img src={four} alt="four" />
          <img src={five} alt="five" />
        </div> 
        <div className='shapes-right-content'>
          <img src={four} alt="four" />
          <img src={five} alt="five" />
          <img src={six} alt="six" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
        </div>         
        <Element name='personal'/>
        <h3>Personal Projects</h3>
        <h1>Latest Works</h1>
        <Line>
          <div/>
        </Line>
        {children}
        <span></span>
      </Wrapper>
      <div className='technologies-wrapper'>
          <Element name='technologies'/>
          <h3>Technologies Used</h3>
          <h1>Client Side</h1>
            <div ref={ref} className='technologies-container'>
              <OrangeMask movement={isVisible ? 'translateY(-420px)' : 'translateY(0px)'}/>
              <LightBlueMask movement={isVisible ? 'translateY(-420px)' : 'translateY(0px)'}/>
              
               {/* ////1/////  */}
              <div className='technologies-box'>
                <span className='technologies-number-phone'>01</span>
                <div className='pink-mask'/>
                <div className='technologies-title'>
                  Technologies
                  <div className='technologies-label'>HTML,CSS</div>
                </div>
                <div className='technologies-number'/>
                <div className='number-label'>01</div>
                <div className='images-wrapper-technologies'>
                  <img src={html} alt="html" />
                  <img src={css} alt="html" />
                </div>
              </div>
               {/* ////2/////  */}
              <div className='technologies-box'>
              <span className='technologies-number-phone-left'>02</span>
              <div className='pink-mask'/>
              <div className='technologies-title'>
                  Technologies
                  <div className='technologies-label'>Styled-C,Material-UI,Bootstrap</div>
              </div>
              <div className='technologies-number'/>
              <div className='number-label'>02</div>
                <div className='images-wrapper-technologies'>
                  <img className='three-images' src={material} alt="html" />
                  <img className='three-images' src={styled} alt="html" />
                  <img className='three-images' src={bootstrap} alt='html'></img>
                </div>
              </div>
               {/* ////3/////  */}
              <div className='technologies-box'>
              <span className='technologies-number-phone'>03</span>
              <div className='pink-mask'/>
                <div className='technologies-title'>
                  Technologies
                  <div className='technologies-label'>Typescript, Javascript</div>
                </div>
                <div className='technologies-number'/>
                <div className='number-label'>03</div>
                <div className='images-wrapper-technologies'>
                  <img src={typescript} alt="html" />
                  <img src={javascript} alt="html" />
                </div>
              </div>
              {/* ////4/////  */}
              <div className='technologies-box'>
                <span className='technologies-number-phone-left'>04</span>
                <div className='pink-mask'/>
                <div className='technologies-title'>
                  Technologies
                  <div className='technologies-label'>ReactJS, Redux</div>
                </div>
                <div className='technologies-number'/>
                <div className='number-label'>04</div>
                <div className='images-wrapper-technologies'>
                  <img src={react} alt="html" />
                  <img src={redux} alt="html" />
                </div>
              </div>
            </div>
          </div>
    </Container>
  )
}

