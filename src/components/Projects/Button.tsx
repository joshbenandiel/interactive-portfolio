import { FC } from "react"
import { ButtonContainer } from "./styled"

interface IProps {
  link: string
}

export const Button: FC<IProps> = ({link}) => {
  return (
    <ButtonContainer>
      <a href={link} target='_blank' rel="noreferrer">
        <button>
          <span className='button-text'>Visit Page</span>
        </button>
        <span className='arrow-right'>&#10230;</span>
      </a>
    </ButtonContainer>
  )
}
