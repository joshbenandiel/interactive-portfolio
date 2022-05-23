import styled, { keyframes } from 'styled-components'


export const cardMask = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`
export const cardMaskBackwards = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`

const buttonFrame = keyframes`
  0% {
    width: 140px;
    transform: translate(-100px)
  }
  100% {
    width: 140px;
    transform: translateX(200px)
  }
  
`

const buttonFrameBackwards = keyframes`
  0% {
    width: 140px;
    transform: translateX(100px)
  }
  100% {
    width: 140px;
    transform: translateX(-160px)
  }
`




export const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #F3F3F3;
  padding-top: 55px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .technologies-wrapper {
    margin-top: 100px;
    z-index: 3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h3 {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      color: #b19386;
      margin: 25px 0px;
    }

    h1 {
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      color: #4a4a4a;
      font-size: 2.5em;
      margin-bottom: 0;
    }

    .technologies-container {
      margin-top: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      
      .technologies-box {
        height: 418px;
        width: 25%;
        position: relative;
        overflow: hidden;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 20px 60px 0 rgb(0 0 0 / 15%);
        cursor: pointer;
        
        .images-wrapper-technologies {
          position: absolute;
          top: 30%;
          left: 0;
          display: flex;
          width: 100%;
          justify-content: center;
          gap: 20px;
          
          .three-images {
            transform: translateY(20px);
            height: 110px;
            width: auto;
          }

          img {
            height: 150px;
            width: auto;
            transition: 0.5s ease;

            &:hover {
              transform: scale(1.2)
            }
          }

          
        }
     

        .technologies-number {
          position: absolute;
          top: 89%;
          right: 8%;
          z-index: 10;
          height: 2px;
          width: 30px;
          background-color: #1c1d25;
          transform: rotate(90deg);
          display: flex;
          transition: 0.5s ease;
          
        }

        .number-label {
          position: absolute;
          top: 84%;
          right: 5.5%;
          font-weight: bold;
          text-align: right;
          font-size: 12px;
          font-weight: 700;
          padding-right: 40px;
          transform: rotate(90deg);
          transition: 0.5s ease 0.3s;
          
        }

        &:hover .technologies-number {
          right: 7%;
          top: 87%;
          width: 40px;
        }

        &:hover .number-label {
          
          top: 80%;
        }

        .pink-mask {
          position: absolute;
          left: 0;
          height: 418px;
          z-index: 0;
          width: 0%;
          background-color: #fce0db;
          transition: 0.35s ease
        }

        &:hover .pink-mask {
          width: 100%;
        }

        .technologies-title {
          position: absolute;
          top: 85%;
          left: 12%;
          text-align: left;
          z-index: 10;
          font-size: .725em;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: League Spartan,Helvetica,Arial,sans-serif;

          .technologies-label {
            text-transform: none;
            font-size: 1.5em;
            font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
          }

          

          /* .technologies-number::after {
            top: 5px;
            content: '01';
            text-align: right;
            font-size: 8px;
            font-weight: 700;
            padding-right: 40px;
          } */

          
        }

        .technologies-title:before {
          content: "";
          position: absolute;
          top: 0.6em;
          left: -12px;
          height: 1px;
          background-color: #1c1d25;
          width: 7px;
        }
      }
    }
  }
`

export const Wrapper = styled.div`
  height: auto;
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    color: #b19386;
    margin: 25px 0px;
  }

  h1 {
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    color: #4a4a4a;
    font-size: 2.5em;
    margin-bottom: 0;
  }
`

export const Line = styled.div`
    width: 51%;
    height: 100%;
    border-right: solid 1px #e9e9e9;
    border-left: solid 1px #e9e9e9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    div {
    width: 1px;
    height: 100%;
    background-color: #e9e9e9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
`

/////// BUTTON ////////
export const ButtonContainer = styled.div`
  width: 170px;
  height: 50px;
  margin-top: 20px;
  position: relative;
  cursor: pointer;

  
  .arrow-right {
    position: absolute;
    top: 13px;
    left: 145px;
    font-size: 2rem;
    transition: 0.5s;
    color: #fff;
    z-index: 3;
  }

  button {
    width: 160px;
    height: 45px;
    background-color: #f06449;
    background: linear-gradient(270deg,#f06449,#ef3636);
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #fff;
    cursor: pointer;
    position: relative;
    margin-top: 10px;
    overflow: hidden;


    &:hover + .arrow-right {
     left: 160px;
    }


    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 100%;
      animation: ${buttonFrameBackwards} 0.65s ease forwards
    }

    &:hover {
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

    .button-text {
      position: absolute;
      top: 10px;
      left: 0px;
      width: 100%;
      z-index: 2;
    }
  }
`

const numberAnimation = keyframes`
  from {
    height: 0%;
  }
  to {
    color: #fff;
    height: 110%;
  }
`

/////// CARD CONTAINER /////////////
interface IProps {
  move: string;
}

export const BlueMask = styled.div<{location: string}>`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    transition: 0.5s;
    width: 100%;
    overflow: hidden;

    div {
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 480px;
      transform: translateX(${props => props.location});
      transition: 0.5s
    }
`

export const CardMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  width: 100%;

  .blue-mask-hover {
    height: 480px;
    background-color: #1F4273;
    opacity: 0.4;
    transition: 0.5s ease;
    transform: translateX(-1000px);
  }
`

export const CardContainer = styled.div<IProps>`
  width: 90%;
  height: 480px;
  background-color: #1c1d25;
  cursor: pointer;
  position: relative;
  margin: 100px 50px auto;
  box-shadow: 0 20px 80px 0 rgb(0 0 0 / 45%);
  display: block;
  transform: translateX(${props => props.move});


  .card-number-wrapper {
    position: absolute;
    top: -40px;
    right: -35px;
    opacity: 0;
    transition: 0.5s;

  }
  .card-number-wrapper-left {
    position: absolute;
    top: -40px;
    left: -35px;
    opacity: 0;
    transition: 0.5s;

  }

  &:hover .blue-mask-hover {
    transform: translateX(0);
  }

  &:hover .card-number-wrapper {
    opacity: 1;
    top: -80px;
  }

  &:hover .card-number-wrapper-left {
    opacity: 1;
    top: -80px;
  }

  .card-number {
    position: relative;
    vertical-align: top;
    width: 265px;
    height: 198px;
    font-size: 12em;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    font-weight: 900;
    color: #B0B2C3;
    transition: 0.5s;
    z-index: 3;
    margin: 0;
  }

  .card-number::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.5s ease;
    overflow: hidden;
    z-index: 4;
  }

  &:hover .card-number::before {
    animation: ${numberAnimation} 0.5s ease forwards 0.6s;
  }


  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    opacity: 0.4;
  }


  &:hover span {
    transform: scale(1.05)
  }

  .card-text-wrapper {
    position: absolute;
    bottom: 93px;
    left: 105px;
    z-index: 4;
    transition: 0.5s;
    transition-delay: 0.3s;
    h1 {
      font-size: 3em;
      color: #fff;
      margin: 0;
    }

    h5 {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      font-style:  italic;
      font-size: 1.5em;
      margin: 3px 0px;
      color: #fff;
    }
  }

  .card-text-wrapper-right {
    position: absolute;
    bottom: 93px;
    right: 105px;
    z-index: 4;
    transition: 0.5s;
    transition-delay: 0.3s;
    h1 {
      font-size: 3em;
      color: #fff;
      margin: 0;
    }

    h5 {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      font-style:  italic;
      font-size: 1.5em;
      margin: 3px 0px;
      color: #fff;
    }
  }

  
`