import styled, { keyframes} from 'styled-components'


const buttonFrame = keyframes`
  0% {
    left: 0;
    width: 0px;
  }
  33% {
    left: 0;
    width: 100%;
  }
  66% {
    right: 0;
    width: 100%;
  }
  100% {
    right: 0;
    width: 0;
  }
`

export const ArrowDown = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 2rem;
  color: #fff;
  width: auto;
  transform: rotate(91deg);
  left: 50.2%;
  transition: 0.5s;
  cursor: pointer;
`

export const Container = styled.div`
  background-color: #1C1D25;
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  padding-left: 5%;


  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }

  p {
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-size: 1.3rem;
    font-style: italic;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }
  button {
    width: 140px;
    height: 50px;
    background-color: #f06449;
    background: linear-gradient(270deg,#f06449,#ef3636);
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #fff;
    margin-top: 40px;
    cursor: pointer;
    position: relative;

    span:nth-child(1) {
      position: absolute;
      top: 5px;
      right: -28px;
      font-size: 2rem;
      transition: 0.5s;
    }
  }

  button:hover span {
    right: -35px;  
  }

  button:hover {
    &::after{
      content: '';
      position: absolute;
      top: 0;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 100%;
      animation: ${buttonFrame} 0.35s ease forwards
    }
  }


  ul {
    position: absolute;
    top: 30%;
    right: 30px;

    li {
      list-style: none;
      font-size: 4rem;
      color: #B0B2C3;
      cursor: pointer;

      &:hover {
        filter: brightness(1.4)
      }
    }
  }

  .works-section{
    position: absolute;
    bottom: 50px;
    left: 50%;
    color: #fff;
    cursor: pointer;

    &:hover + ${ArrowDown} {
      bottom: 0;
      transform: rotate(91deg) scale(1.3);
    }
  }
`