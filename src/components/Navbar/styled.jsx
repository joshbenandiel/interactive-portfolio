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

export const NavWrapper = styled.nav`
  color: #B0B2C3;
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
    div {
      cursor: pointer;
    }
    ul {
      display: flex;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      gap: 50px;
    }
      li {
        list-style: none;
        position: relative;
      }

      li:hover {
        color: #fff;
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
`