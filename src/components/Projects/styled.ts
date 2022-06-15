import styled from 'styled-components'



export const OrangeMask = styled.div<{movement: string}>`
  height: 100%;
  width: 100%;
  background-color: #f06449;
  background: linear-gradient(270deg,#f06449,#ef3636);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 12;
  transform: ${props => props.movement};
  transition: 0.5s ease;
  transition-delay: 0.3s;

  @media (max-width: 425px){
    display: none
  }

  
`
export const LightBlueMask = styled.div<{movement: string}>`
  height: 100%;
  width: 100%;
  background: linear-gradient(270deg,#235aa6,#101b3b);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 13;
  transform: ${props => props.movement};
  transition: 0.5s ease;
  @media (max-width: 425px){
    display: none
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
  overflow:hidden;

  @media (max-width: 425px){
    width: 425px;
  }
  @media (max-width: 375px){
    width: 375px;
  }



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
      position: relative;
      overflow: hidden;

      @media (max-width: 425px){
        flex-direction: column;
      }
      
      
      .technologies-box {
        height: 418px;
        width: 25%;
        position: relative;
        overflow: hidden;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 20px 60px 0 rgb(0 0 0 / 15%);
        cursor: pointer;

        @media (max-width: 1024px){
          height: 320px;
        }

        .technologies-number-phone {
          display: none
        }

        .technologies-number-phone-left {
          display: none
        }

/*                
        @media (max-width: 1024px){
          width: 100%;

          .technologies-number-phone {
            position: absolute;
            top: 50%;
            right: -44%;
            transform: translate(-50%,-50%);
            font-size: 13em;
            font-weight: bold;
            color: #fce0db;
            display: block;
          }
          .technologies-number-phone-left {
            position: absolute;
            top: 50%;
            right: -44%;
            transform: translate(-50%,-50%);
            font-size: 13em;
            font-weight: bold;
            color: #f9ebe9;
            display: block;
          }
        } */

        @media (max-width: 425px){
          width: 100%;

          .technologies-number-phone {
            position: absolute;
            top: -47px;
            right: -43px;
            font-size: 15em;
            font-weight: bold;
            color: #fce0db;
            display: block;
          }
          .technologies-number-phone-left {
            position: absolute;
            top: -47px;
            left: -43px;
            font-size: 15em;
            font-weight: bold;
            color: #f9ebe9;
            display: block;
          }
        }

 


        &:hover img {
          transform: scale(1.1)
        }

        &:hover .images-wrapper-technologies .three-images {
          transform: scale(1.1)
        }
        
        .images-wrapper-technologies {
          position: absolute;
          top: 30%;
          left: 0;
          display: flex;
          width: 100%;
          justify-content: center;
          gap: 20px;

          @media (max-width: 1024px){
            flex-direction: column;
            width: 100px;
            align-items: center;
            justify-content: center;
            transform: translate(67px, -66px)
          }

            
          @media (max-width: 425px){
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            flex-direction: row;
          }

          
          .three-images {
            transform: translateY(20px);
            height: 110px;
            width: auto;

            @media (max-width: 1424px){
              height: 70px;
            }
            @media (max-width: 1024px){
              height: 50px;
            }

            @media (max-width: 425px){
              height: 90px;
            }
            &:hover {
              transform: scale(1.2)
            }
          }

          img {
            height: 150px;
            width: auto;
            transition: 0.5s ease;

            @media (max-width: 1424px){
              height: 100px;
            }

            
            @media (max-width: 1024px){
              height: 100px;
            }

            @media (max-width: 425px){
              height: 150px;
            }

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

          @media (max-width: 1024px){
            display: none;
          }

          @media (max-width: 425px){
            display: none
          }
          
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

          @media (max-width: 1424px){
           right: 4.5%;
          }
          @media (max-width: 1024px){
            display: none;
          }

          @media (max-width: 425px){
            display: none
          }
          
        }

        &:hover .technologies-number {
          right: 7%;
          top: 87%;
          width: 40px;
        }

        &:hover .number-label {
          transform: rotate(90deg) translateX(-15px)
        }

        .pink-mask {
          position: absolute;
          left: 0;
          height: 418px;
          z-index: 0;
          width: 100%;
          background-color: #fce0db;
          transition: 0.35s ease;
          transform: translateX(-500px)
        }

        &:hover .pink-mask {
          transform: translateY(0)
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

        

          @media (max-width: 425px){
            font-size: 1em;
          }

          .technologies-label {
            text-transform: none;
            font-size: 1.5em;
            font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;

            @media (max-width: 1424px){
              font-size: 1.3em;
            }
            @media (max-width: 1024px){
              font-size: 1em;
            }

          
          }
         
        }

        .technologies-title:before {
          content: "";
          position: absolute;
          top: 0.6em;
          left: -12px;
          height: 1px;
          background-color: #1c1d25;
          width: 7px;

          @media (max-width: 1024px){
            display: none;
          }
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


  .shapes-left-content {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 130px;
    margin-top: 300px;

  }

  .shapes-right-content {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    margin-top: 250px;
    gap: 130px;


  }
  @media (max-width: 425px){
   width: 425px; 
  }
  @media (max-width: 375px){
   width: 375px; 
  }

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
    top: 50%;
    transform: translateY(-50%);
    left: 136px;
    font-size: 2rem;
    transition: 0.5s;
    color: #fff;
    z-index: 3;
  }

  button {
    width: 150px;
    height: 45px;
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
      transition: 0.5s ease;
      width: 100%;
      transform: translateX(-150px);


    }

    &:hover:after {
      transform: translateX(150px);
    }

    .button-text {
      position: absolute;
      top: 10px;
      left: 0px;
      width: 100%;
    }
    &:hover + .arrow-right {
     transform: translateX(11px)
    }
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
    z-index: 5;
    transition: 0.5s;
    width: 100%;
    overflow: hidden;

    @media (max-width: 425px){
      display: none
    }


    div {
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 480px;
      transform: translateX(${props => props.location});
      transition: 0.5s;

      @media (max-width: 1024px){
        width: 100%;
        height: 400px;
      }
    
      @media (max-width: 425px){
        height: 300px;
      }
    }
`

export const CardMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  width: 100%;

  .blue-mask-hover {
    height: 480px;
    background-color: #1F4273;
    opacity: 0.4;
    transition: 0.5s ease;
    transform: translateX(-1000px);

    @media (max-width: 1024px){
      width: 100%;
      height: 400px;
    }

    @media (max-width: 425px){
      height: 300px;
      width: 100%;
    }
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


  @media (max-width: 1024px){
    width: 70%;
    height: 400px;
  }

  @media (max-width: 425px){
    height: 300px;
    width: 90%;
    transform: translateX(0)
  }


  .card-number-wrapper {
    position: absolute;
    top: -60px;
    right: -35px;
    transition: 0.5s;
    z-index: 10;
    @media (max-width: 425px){
      display: none;
    }
  }
  .card-number-wrapper-left {
    position: absolute;
    top: -60px;
    left: -35px;
    transition: 0.5s;
    z-index: 10;
    @media (max-width: 425px){
      display: none;
    }
  }

  &:hover .blue-mask-hover {
    transform: translateX(0);
  }

  &:hover .card-number {
    color: #B0B2C3;
    transition: 0.2s;
  }

  &:hover .card-number-wrapper  {
    transition: 0.5s;
    transform: translateY(-30px)
  }

  &:hover .card-number-wrapper-left  {
    transition: 0.5s;
    transform: translateY(-30px)
  }

  .card-number {
    position: relative;
    vertical-align: top;
    width: auto;
    height: auto;
    font-size: 13em;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    font-weight: 900;
    color: transparent;
    transition: 0.2s;
    z-index: 3;
    margin: 0;
    overflow: hidden;
    @media (max-width: 425px){
      display: none;
    }
    
  }

  .card-number::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.5s ease;
    overflow: hidden;
    z-index: 4;
    height: 100%;
    
  }

  &:hover .card-number {
    color: #fff;
  }


  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    opacity: 0.4;

    @media (max-width: 1024px){
      width: 100%;
      height: 400px;
    }

    @media (max-width: 425px){
      height: 300px;
    }
  }


  &:hover span {
    transform: scale(1.05);
    z-index: 10;
  }

  .card-text-wrapper {
    position: absolute;
    bottom: 93px;
    left: 105px;
    z-index: 4;
    transition: 0.5s;
    transition-delay: 0.3s;
    @media (max-width: 425px){
      left: 30px;
      bottom: 20px;
    }
    h1 {
      font-size: 3em;
      color: #fff;
      margin: 0;

      @media (max-width: 425px){
       font-size: 2em;
      }
    }

    h5 {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      font-style:  italic;
      font-size: 1.5em;
      margin: 3px 0px;
      color: #fff;
    }
    @media (max-width: 425px){
      font-size: 1em;
    }
  }

  .card-text-wrapper-right {
    position: absolute;
    bottom: 93px;
    right: 105px;
    z-index: 4;
    transition: 0.5s;
    transition-delay: 0.3s;
  
    @media (max-width: 425px){
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      right: 20px;
      bottom: 20px;
    }
    h1 {
      font-size: 3em;
      color: #fff;
      margin: 0;
      @media (max-width: 425px){
       font-size: 2em;
      }
    }

    h5 {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      font-style:  italic;
      font-size: 1.5em;
      margin: 3px 0px;
      color: #fff;
      @media (max-width: 425px){
       font-size: 1em;
      }
    }
  }

  
`