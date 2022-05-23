import styled from "styled-components";


export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme};
  position: relative;
  overflow: hidden;

  .layer-1 {
    position: absolute;
    top: 50px;
    left: 0;
     
    .shapes {
      height: 50px;
      transform: translate3d(60px,0,0);
    }
  }
  .layer-2 {
    position: absolute;
    bottom: 0;
    left: -200px;

    img {
      height: 250px;
    }
  }

  .layer-3 {
    position: absolute;
    top: 300px;
    right: -200px;

    img {
      height: 250px;
    }
  }
  .layer-4 {
    position: absolute;
    bottom: 100px;
    right: 0;
   
    img {
      height: 250px;
    }
  }

  .background-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 600px;
    z-index: 1;
  }

  .navbar-hide {
    transition: 0.5s ease 0.5s;
    opacity: 1;
  }
  .navbar-hide-false {
    transition: 0.5s;
    opacity: 0;
  }
`