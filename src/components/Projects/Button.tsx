import { ButtonContainer } from "./styled"

export const Button = () => {
  return (
    <ButtonContainer>
      <button>
        <span className='button-text'>Visit Page</span>
      </button>
      <span className='arrow-right'>&#10230;</span>
    </ButtonContainer>
  )
}
