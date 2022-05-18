import { FC } from 'react'
import { Container, Line, Wrapper } from './styled'

interface ProjectsProps {
  children: React.ReactNode
}

export const Projects:FC<ProjectsProps> = ({children}) => {
  return (
    <Container>
      <Wrapper>
        <h3>Personal Projects</h3>
        <h1>Latest Works</h1>
        <Line>
          <div/>
        </Line>
        {children}
        <div className='technologies-wrapper'>
          <h3>Technologies Used</h3>
          <h1>Client Side</h1>
        </div>
      </Wrapper>
    </Container>
  )
}

