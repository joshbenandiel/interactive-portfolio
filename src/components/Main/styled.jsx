import styled, { keyframes} from 'styled-components'


const buttonFrame = keyframes`
  0% {
    width: 140px;
    transform: translateX(-100px)
  }
  100% {
    width: 140px;
    transform: translateX(200px)
  }
  
`

const buttonFrameBackwards = keyframes`
  0% {
    width: 140px;
    transform: translateX(200px)
  }
  100% {
    width: 140px;
    transform: translateX(-150px)
  }
  
`

const textFrame = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0
  }
`

export const ArrowDown = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 2rem;
  color: #fff;
  width: auto;
  transform: translateX(-50%) rotate(91deg);
  left: 50%;
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
    width: fit-content;
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: 0;
      height: 80px;
      background-color: #fff;
      animation: ${textFrame} 1s ease forwards;
    }
  }

  .text-wrapper {
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-size: 1.3rem;
    font-style: italic;
    color: #fff;
    margin: 0;
    margin-top: 20px;
    width: fit-content;
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: 0;
      height: 45px;
      background-color: #fff;
      animation: ${textFrame} 1s ease forwards;
    }
  }

  .button-wrapper {
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    position: relative;
    cursor: pointer;

    .white-box {
      position: absolute;
      top: 0;
      right: 0;
      height: 55px;
      background-color: #fff;
      animation: ${textFrame} 1s ease forwards;
    }
    .arrow-right {
      position: absolute;
      top: 5px;
      right: 0px;
      font-size: 2rem;
      transition: 0.5s;
      color: #fff;
      z-index: 3;
    }

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
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 100%;
      animation: ${buttonFrameBackwards} 0.65s ease forwards
    }

    .about-me-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      z-index: 2;
    }
  }

  button:hover + .arrow-right {
    right: -8px;
  }

  button:hover {
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 100%;
      animation: ${buttonFrame} 0.65s ease forwards
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
    bottom: 30px;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
    cursor: pointer;

    &:hover + ${ArrowDown} {
      bottom: 0;
    }
  }
`