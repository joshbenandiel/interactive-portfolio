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

      li span {
        position: absolute;
        height: 3px;
        width: 100%;
        border-radius: 5px;
        bottom: 17px;
        right: 1px;
        opacity: 1;
        background-color: #EF6348;
        transform: translateX(-146px);
        transition: 0.5s ease;

      }

      li:hover span {
        transform: translateX(0);
        /* background-color: rgb(31,65,113); */
        color: #fff
      }
`