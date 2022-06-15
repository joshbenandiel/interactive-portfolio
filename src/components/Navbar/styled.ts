import styled from 'styled-components'


export const Hamburger = styled.button<{toggle: string}>`

  position: absolute;
  top: 13px;
  right: 10px;
  height: 50px;
  width: 60px;
  background-color: transparent;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  visibility: hidden;

  span:nth-child(1) {
    height: 4px;
    width: 100%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  span:nth-child(2) {
    height: 4px;
    width: 75%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  span:nth-child(3) {
    height: 4px;
    width: 50%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  @media (max-width: 425px){
    visibility: visible;
  }

  @media (max-width: 425px){
    top: 0px;
  }

`


export const NavOpen = styled.span<{open: string, scale: string, show: string}>`

@media (max-width: 425px){
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 425px;
    z-index: ${props => props.show};
    overflow: hidden;

    .nav-link {
      text-decoration: none
    }
    

    .orange-mask-nav {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 200;
      background-color: #f06449;
      background: linear-gradient(270deg,#f06449,#ef3636);
      transition: 0.5s;
      transform: ${props => props.open};
    }


    .blue-mask-nav {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 201;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      transform:  ${props => props.open};
      transition: 0.8s; 

      

      button {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 200;
        background-color: transparent;
        border: none;
        outline: none;  


        .close-button-nav {
          pointer-events: none;
          transition: 0.5s ease 0.2s;
          transform: scale(${props => props.scale});
        }
      }
      .ul-nav {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 30px;
        transition: 0.5s ease;

        li {
          color: #fff;
          font-weight: bold;
          list-style: none;
          font-size: 1.6875em;
          font-family: League Spartan,Helvetica,Arial,sans-serif;
          padding-left: 50px;
          transition: 0.5s;
        }
      }
    }
  }

  @media (max-width: 375px){
    width: 375px;
  }
`
export const NavOpenFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  display: flex;
  


  ul {
    display: flex;
    list-style: none;
    font-size: 30px;
    gap: 20px;
    
    li a{
      color: #fff;
      cursor: pointer;
    }
  }

`

export const NavWrapper = styled.nav<{move: string, textColor: string, textColorHover: string, toggle: string}>`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 100;
  color: ${props => props.textColor};
  width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  transform: ${props => props.move} translateX(-50%);
  transition: 0.35s ease;
  display: ${props => props.toggle};
  margin-top: 10px;
  @media (max-width: 1500px){
    width: 70%;
  }
  @media (max-width: 1024px){
    width: 90%;
  }
  @media (max-width: 425px){
    width: 290px;
    left: 60%;
  }

  @media (max-width: 375px){
    left: 55%;
    /* transform: translateX(-50%); */
  }

    div {
      cursor: pointer;
      img {
        position: absolute;
        top: 0;
        left: -50px;
        height: 70px;
        transition: 1s ease;

        @media (max-width: 1024px){
          left: 0px;
          height: 60px;
        }

        @media (max-width: 425px){
          height: 50px;
          left: -70px;
        }

        @media (max-width: 375px){
          height: 50px;
          left: -30px;
        }
      }
    }
    ul {
      display: flex;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      gap: 50px;

      @media (max-width: 1024px){
        gap: 30px;
      }
      @media (max-width: 425px){
        display: none;
      }

    }
      li {
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }



      li:hover {
        color: ${props => props.textColorHover};
      }

  

      li span:before {
        content: "";
        position: absolute;
        bottom: 0px;
        right: 0;
        left: auto;
        width: 100%;
        transform: translateX(150px);
        height: 3px;
        z-index: 2;
        background-color: #235aa6;
        transition: all .25s cubic-bezier(.694,.048,.335,1) .17s;
      }

      li span:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        transform: translateX(-150px);
        height: 3px;
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

    
`