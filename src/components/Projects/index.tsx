import { FC } from 'react'
import { Container, Line, Wrapper } from './styled'
// import bootstrap from './images/bootstrap.png'
// import css from './images/css.png'
// import html from './images/html.png'
// import javascript from './images/javascript.png'
// import material from './images/material.png'
// import react from './images/react.png'
// import redux from './images/redux.png'
// import styled from './images/styled.png'
// import typescript from './images/typescript.png'

interface ProjectsProps {
  children: React.ReactNode
  techRef: React.MutableRefObject<undefined>
  worksRef: React.MutableRefObject<undefined>
}

export const Projects:FC<ProjectsProps> = ({children, techRef, worksRef}) => {
  return (
    <Container>
      <Wrapper ref={worksRef}>
        <h3>Personal Projects</h3>
        <h1>Latest Works</h1>
        <Line>
          <div/>
        </Line>
        {children}
        <span></span>
      </Wrapper>
      {/* <div className='technologies-wrapper'>
          <h3>Technologies Used</h3>
          <h1>Client Side</h1>
          <div className='technologies-container'>
            <div ref={techRef} className='technologies-box'>
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
        </div> */}
    </Container>
  )
}

