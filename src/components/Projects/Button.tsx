import { FC } from "react"
import { ButtonContainer } from "./styled"

interface IProps {
  link: string
  button: string
}

export const Button: FC<IProps> = ({link, button}) => {
  return (
    <ButtonContainer>
      <a href={link} target='_blank' rel="noreferrer">
        <button>
          <span className='button-text'>{button}</span>
        </button>
        <span className='arrow-right'>&#10230;</span>
      </a>
    </ButtonContainer>
  )
}
