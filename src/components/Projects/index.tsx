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
  }, [render])


  return (
    <Container>
      <Wrapper>
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
              <div className='technologies-box'>
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
              <div className='technologies-box'>
                <div className='pink-mask'/>
              <div className='technologies-title'>
                  Technologies
                  <div className='technologies-label'>MaterialUI,StyledComponents,Bootstrap</div>
              </div>
              <div className='technologies-number'/>
              <div className='number-label'>02</div>
                <div className='images-wrapper-technologies'>
                  <img className='three-images' src={material} alt="html" />
                  <img className='three-images' src={styled} alt="html" />
                  <img className='three-images' src={bootstrap} alt='html'></img>
                </div>
              </div>
              <div className='technologies-box'>
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
              <div className='technologies-box'>
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

