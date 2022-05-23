import styled, {keyframes} from 'styled-components'


const linear = keyframes`
  0% {
     width: 0;
  }
  100% {
    width: 100%;
  }

`;

const linearLoad = keyframes`
  0% {
    left: 0;
    width: 0;
  }
  25% {
    left: 0;
    width: 300px;
  }
  50% {
    right: 0;
    width: 300px
  }
  75% {
    right: 0;
    width: 0px;
  }
  100% {
    right: 0;
    width: 300px;
  }
`;


export const PreLoader = styled.div`
  height: 100vh;
  width: 0%;
  background-color: #F06449;
  animation: ${linear} 0.8s ease both;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100vh;
    width: 0%;
    background-color: #26408B;
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

`;

