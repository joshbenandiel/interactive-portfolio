import styled, { keyframes } from 'styled-components'
import { linear, linearLoad } from '../../Page/styled'


const WhiteBox = keyframes`
from {
  transform: translateX(0)
}
to {
  transform: translate(430px)
}
`

const NavTranslate = keyframes`
  from {
    transform: translateY(-80px)
  }
  to {
    transform: translateY(0px)
  }
`

//----------RELATIVE----------------//
export const Relative = styled.div`
    position: relative;
`

//----------LOADING----------------//
export const LoadingContainer = styled.div`
  height: 100vh;
  width: 0%;
  background-color: #0069a6;
  animation: ${linear} 0.8s ease both;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100vh;
    width: 0%;
    background-color: #060c10;
    animation: ${linear} 1s ease both;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    z-index: 2;

    ul {
      height: auto;
      width: 300px;
      position: relative;
      margin: 0px;
      padding: 0px;
      
      @media (max-width: 380px){
        transform: translateY(-30px)
      }
    }

    li {
      list-style: none;
    }
    li:nth-child(1) {
      position: absolute;
      top: 0;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 1.6s ease-out infinite 0.5s;
    }
    li:nth-child(2) {
      position: absolute;
      top: 30px;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 1.8s ease-out infinite 0.5s;
    }
    li:nth-child(3) {
      position: absolute;
      top: 60px;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 2s ease-out infinite 0.5s;
    }
  }
`
//----------NAVBAR----------------//
export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background: rgba(28,29,37,.9);
  color: #B0B2C3;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  opacity: 0.9;
  animation: ${NavTranslate} 0.5s ease forwards;
  z-index: 10;

`
export const ArrowLeft = styled.span`
  position: absolute;
  top: 0;
  left: -30px;
  transform: rotate(180deg);
  font-size: 22px;
  display: flex;
  font-weight: bold;
`
export const NavWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

    img {
      height: 55px;
      cursor: pointer;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 30px;
      font-size: 1.1em;
      
      .home-link {
        color: #B0B2C3;
        text-decoration: none;
      }
      
   
      .home-hover {
        position: relative;
      }

      .arrow-relative {
        transition: 0.5s;
      }

      .home-hover:hover .arrow-relative {
        transform: translateX(-10px);
      }

      li {
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-weight: bold;
        height: auto;
        cursor: pointer;
      }
      
      li span:before {
        content: "";
        position: absolute;
        bottom: -1px;
        right: 0;
        left: auto;
        width: 100%;
        transform: translateX(150px);
        height: 4px;
        z-index: 2;
        background-color: #235aa6;
        transition: all .25s cubic-bezier(.694,.048,.335,1) .17s;
      }

      li span:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        transform: translateX(-150px);
        height: 4px;
        z-index: 2;
        background-color: #f25757;
        transition: all .25s cubic-bezier(.694,.048,.335,1);
      }

      li:hover span:after {
        transform: translateX(0px);
       
      }
      li:hover span:before {
        transform: translateX(0px)
      }
    }
`
//----------MAIN----------------//
export const Background = styled.div`
  height: 90vh;
  width: 100%;
  background-position: 50%;
  position: relative;

  .background-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    background: #000;
    opacity: .55;
    transition: opacity .3s ease;
    z-index: 2;
  }
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
  }
`

export const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
  z-index: 3;

  .background-text-wrapper {
    position: relative;
  }
  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(50px);
    h1 {
      color: #fff;
      font-size: 4em;
      margin: 0;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 430px;
        background-color: #fff;
        animation: ${WhiteBox} 0.8s ease forwards; 
      }
    }
  
    h3 {
      color: #fff;
      position: relative;
      font-size: 1.5em;
      font-style: italic;
      font-weight: normal;
      overflow: hidden;
      margin: 0;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 430px;
        background-color: #fff;
        animation: ${WhiteBox} 1.5s ease forwards; 
      }
    }


  }
  ul {
    color: #fff;
    position: absolute;
    bottom: -350px;
    left: -334px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 66em;
    li {
      font-size: 1em;
      font-weight: bold;
      color: #37A5EB;
      text-transform: uppercase;
      display: flex;
      gap: 10px;
      span {
        color: #fff;
      }
    }
  }
`
//----------PROJECT----------------//
export const Project = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #060c10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;

    div {
      width: 30em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50px;
      z-index: 10;
    }
    h2 {
      font-size: 4rem;
      color: #fff;
      margin: 5px 0px;
    }

    p {
      font-size: 1.2em;
      color: #fff;
      font-style: italic;
      
    }
    span {
      position: absolute;
      bottom: -35px;
      left: 200px;
      font-size: 10rem;
      color: #fff;
      z-index: 5; 
      color: #1c1d25;

    }
`

export const VisitPage = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100px);
  
  button {
    height: 45px;
    width: 180px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
    position: relative;

    &:hover .project-right-arrow {
      color: #fff;
      transform: translateX(30px)
    }
    .project-right-arrow {
      position: absolute;
      top: 6px;
      right: 0;
      transform: translateX(20px);
      transition: 0.5s;
    }

    &:hover {
      background-color: #fff;
      color: #060c10;
    }
  }

  


`
//----------COMPONENTS----------------//
export const ComponentsContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: transparent;
`

export const ComponentsWrapper = styled.div`
    width: 60em;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;

    h3 {
      font-size: 14px;
      letter-spacing: 2px;
      color: #b19386;
      margin-top: 80px;
    }

    h2 {
      color: #4a4a4a;
      font-size: 35px;
      margin: 0;
      margin-top: 10px;
    }

    .components-line {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid #e8e8e9;
      z-index: -1;

      span {
        display: block;
        height: 100%;
        width: 50%;
        border-right: 1px solid #e8e8e9;
      }
    }
    .components-design {
      height: 350px;
      margin: 100px 0px;
      box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);
      -webkit-box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);
      -moz-box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);
    }
`

export const ColorContainer = styled.div`
  width: 110%;
  display: flex;
  height: 20vh;
  gap: 70px;
  margin-top: 100px;


  .color-circle {
    width: 160px;
    height: 160px;
    background-color: red;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 33%);
    border-radius: 50%;
    transition: all .3s;
    position: relative;
    p {
      font-size: .8125em;
      font-family: Consolas,Monaco,Bitstream Vera Sans Mono,Courier,monospace;
      font-weight: 400;
      color: #4a4a4a;
      position: absolute;
      bottom: -41px;
      left: 30%;
    }
  }

  .color-circle.ebony {
    background-color: #060c10;
  }
  .color-circle.mine {
    background-color: #333333;
  }
  .color-circle.gallery {
    background-color: #ededed;
  }
  .color-circle.white {
    background-color: #fff;
  }
  .color-circle.denim {
    background-color: #0069a6;
  }
`

export const FontContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: -50px;

  img {
    height: 400px;
  }
`

export const NextPage = styled.div`
  height: 150px;
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00c8e7;
    width: 100%;
    height: 100%;
    transition: 0.8s ease-in-out;
    transform: translateY(-149px);
    
  }
  &:hover:after {
    transform: translateY(0px);
  }

  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #060c10;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
    transform: translateY(-149px);
  }

  &:hover:before {
    transform: translateY(0px);
  }

  &:hover div {
    color: #fff;
  }
  &:hover div p {
    color: #fff;
  }
  &:hover .arrow-right-next {
    color: #fff;
    transform: translateX(50px)
  }
  div {
    width: 60em;
    margin: 0 auto;
    padding-top: 10px;
    position: absolute;
    left: 25%;
    z-index: 5;

    .arrow-right-next {
      position: absolute;
      top: 70px;
      right: 100px;
      transition: 0.5s;
    }
   
    p {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      text-transform: uppercase;
      color: #b19386;
      font-size: .95em;
      font-weight: 400;
    }

    h1 {
      font-size: 2.827145944em;
      line-height: 1.0611408323;
      font-weight: bold;
      text-decoration: underline;
      text-decoration-color: #00c8e7;
    }
  }
`