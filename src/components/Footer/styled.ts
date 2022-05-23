import styled, {keyframes} from 'styled-components'

const textLine = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: 100%;
  }
`
const textLineBackwards = keyframes`
  0% {
    width: 100%
  }
  100% {
    width: 0%;
  }
`

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #1C1D25;
  padding: 80px 0px 100px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #F3F3F3;
  gap: 20px;

 
 
  div {
    cursor: pointer;
    img {
      height: 70px;

      @media (max-width: 380px){
        transform: translateX(-5px)
      }
    }
  }
  ul {
    display: flex;
    gap: 60px;

    @media (max-width: 380px){
      gap: 10px;
      transform: translateX(-20px)
    }
    li {
      list-style: none;
      cursor: pointer;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      font-size: 1rem;
      font-weight: bold;
      position: relative;

      a {
        color: #F3F3F3;
        text-decoration: none
      }
    }

    li span {
        position: absolute;
        height: 3px;
        width: 0;
        border-radius: 5px;
        bottom: -6px;
        right: 1px;
        opacity: 1;
        animation: ${textLineBackwards} 0.35s ease forwards;
        background-color: rgb(31,65,113);

      }

      li:hover span {
        left: 1px;
        bottom: -6px;
        animation: ${textLine} 0.35s ease forwards;
        background-color: #EF6348;
      }
  }
  p {
    margin: 0;
  }
  p span {
    cursor: pointer;
  }
`