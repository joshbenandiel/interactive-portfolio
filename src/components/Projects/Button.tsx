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
      <>
      <Link to={link}>
        <button>
          <span className='button-text'>{button}</span>
        </button>
        <span className='arrow-right'>&#10230;</span>
      </Link>
      </>
    </ButtonContainer>
  )
}
