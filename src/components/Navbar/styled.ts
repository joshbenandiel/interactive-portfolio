import styled from 'styled-components'





export const NavWrapper = styled.nav<{move: string, textColor: string, textColorHover: string}>`
  position: fixed;
  top: 0;
  left: 23%;
  z-index: 100;
  color: ${props => props.textColor};
  width: 1080px;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  transform: ${props => props.move};
  transition: 0.35s ease;

    div {
      cursor: pointer;
      img {
        position: absolute;
        top: 15px;
        left: -50px;
        height: 70px;
        transition: 1s ease;
      }
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
        bottom: 19px;
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
        bottom: 19px;
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