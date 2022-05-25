import { FC } from "react"
import { ButtonContainer } from "./styled"
import { Link } from 'react-router-dom'

interface IProps {
  link: string
  button: string
}

export const Button: FC<IProps> = ({link, button}) => {
  return (
    <ButtonContainer>
      {button === 'Case Study' ? (
        <Link to={link}>
        <button>
          <span className='button-text'>{button}</span>
        </button>
        <span className='arrow-right'>&#10230;</span>
        </Link>
      ) : (
        <>
        <a href={link} target='_blank' rel="noreferrer">
          <button>
            <span className='button-text'>{button}</span>
          </button>
          <span className='arrow-right'>&#10230;</span>
        </a>
        </>
      )}
    </ButtonContainer>
  )
}
