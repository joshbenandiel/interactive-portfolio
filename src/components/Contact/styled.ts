import styled from 'styled-components'




export const Container = styled.div`
  height: 90vh;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 5;
  box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
`

interface AboutProps {
  position: string
}


export const About = styled.div<AboutProps>`
  height: 90vh;
  width: 100%;
  background-color: #EBEBEB;
  position: relative;
  overflow: hidden;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${props => props.position};
  transition: 0.5s ease;



  .about-text {
    font-size: 200px;
    font-weight: bold;
    position: absolute;
    opacity: .07;
    top: -10px;
    left: 100px;
    color: #4a4a4a;
    z-index: 100;
  }

  section {
    padding: 80px;
    transform: translateY(-80px);

    h1 {
      font-weight:bold;
    }

    .about-label{
      font-style: italic;
      color: #505157;
      font-weight:bold;
    }

    .about-paragraph {
      color: #505157;
      font-size: 1.1em;
      text-align: justify;
      font-weight:bold;

      span {
        color: #F0684E;
      }
    }
  }
  .about-icons {
    display: flex;
    justify-content: center;
    gap: 5%;
    transform: translateY(-150px);

    .icon1:hover {
      color: #5ED3F3;
    }

    .icon2:hover {
      color: #EFD81D;
    }

    .icon3:hover {
      color: #E96228;
    }

    .icon4:hover {
      color: #2F4BD9;
    }

    .icons-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 0;
        margin-top: 5px;
        font-weight: bold;
        transform: translateY(15px);
        opacity: 0;
        transition: 0.5s;
      }

      &:hover p {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`

export const ContactMe = styled.div<{contactPosition: string}>`
  height: 90vh;
  width: 100%;
  background-color: #1C1D25;
  position: relative;
  overflow: hidden;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: ${props => props.contactPosition};
  transition: 0.5s ease;
    


  section {
    color: #DADADA;
    width: 70%;
    transform: translateY(-50px);
    position: relative;
    
    h1 {
      text-align: start;
      font-size: 2em;
      margin: 10px 0px;
    }

    p {
      font-size: 1em;
      margin: 0;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .input-wrapper {
        position: relative;
        overflow: hidden;

        .input-color-area {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 2px;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          z-index: 2;
          width: 100%;
          transition: 0.5s ease;
          transition-delay: 0.1s;
          transform: translateX(-410px);
        }

        .second-input-color-area {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 2px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 1;
          width: 100%;
          transition: 0.5s ease;
          transform: translateX(-410px);
        }

        &:hover .input-color-area {
           transform: translateX(0px);
        }
        &:hover .second-input-color-area {
           transform: translateX(0px);
        }


        .input-color {
          position: absolute;
          bottom: 0px;
          left: 0;
          height: 2px;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          z-index: 2;
          width: 100%;
          transition: 0.5s ease;
          transition-delay: 0.1s;
          transform: translateX(-400px);

        }

        .second-input-color {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 1;
          width: 100%;
          transition: 0.5s ease;
          transform: translateX(-400px);
        }

        &:hover .input-color {
          transform: translateX(0);
        }
        &:hover .second-input-color {
          transform: translateX(0);
        }
      }

      div input, textarea {
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #DADADA;
        background-color: transparent;
        outline: none;
        color: #DADADA;
        transition: 0.5s ease;
        font-size: 1em;

        &:after {
          content: "";
          border-left: 2px solid #f51c40;
          position: absolute;
          top: 50%;
          bottom: 0;
        }

      }

      button {
        width: 50%;
        height: 40px;
        background-color: #f06449;
        background: linear-gradient(270deg,#f06449,#ef3636);
        border: none;
        outline: none;
        color: rgb(173,146,147);
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
        position: relative;
        overflow: hidden;

        span {
          position: absolute;
          top: 5px;
          left: 30px;
          z-index: 10;
        }

        &::after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          width: 100%;
          transform: translateX(-200px);
          transition: 0.5s ease;
        }
        &:hover::after {
          transform: translateX(200px)
        }
      }
    }
    .contact-close-button {
      position: absolute;
      top: -10px;
      right: 0px;
      z-index: 20;
      height: 40px;
      width: 40px;
      cursor: pointer;

      .first-line {
        position: absolute;
        height: 3px;
        width: 35px;
        background-color: #DADADA;
        transform: rotate(135deg);
        transition: 0.5s ease;
        z-index: 1;
        top: 20px;
        overflow: hidden;

        .line-color {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 50px;
          width: 50px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 2;
          transform: rotate(45deg) translateX(10px) translateY(0px);
          transition: 0.5s ease;
        }
      }

      &:hover .line-color {
        transform: translateX(-60px) translateY(-60px);
      }

      .second-line {
        position: absolute;
        top: 20px;
        height: 3px;
        width: 35px;
        background-color: #DADADA;
        transform: rotate(45deg);
        transition: 0.5s ease;
        z-index: 1;
        overflow: hidden;

        .second-line-color {
          position: absolute;
          top: 50%;
          right: 50%;
          height: 50px;
          width: 50px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 2;
          transform: rotate(45deg) translateY(5px);
          transition: 0.5s ease;
        }
      }

      &:hover .second-line-color {
        transform: translateY(-60px) translateX(40px);
      }

      &:hover .first-line {
        transform: rotate(223deg);
      }
      &:hover .second-line {
        transform: rotate(-45deg);
      }
    }
  }
  .contact-text {
    font-size: 200px;
    font-weight: bold;
    position: absolute;
    opacity: .07;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    bottom: -10px;
    left: 40px;
    color: #4a4a4a;
    z-index: 100;
  }
`