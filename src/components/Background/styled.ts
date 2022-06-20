import styled from "styled-components";




export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme};
  position: relative;
  overflow: hidden;

  @media (max-width: 425px){
    width: 425px;
  }

  @media (max-width: 375px){
    width: 375px;
  }


  .layer-1 {
    position: absolute;
    top: 0;
    left: 0px;
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 100px;
    padding: 100px;


    img {
      height: 50px;
      transition: 0.1s ease;
      
    }
  }
  .layer-2 {
    position: absolute;
    bottom: 0;
    left: 00px;
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 200px;
    padding: 100px;

    img {
      height: 50px;
      transition: 0.1s ease;
    }
  }

  .layer-3 {  
    position: absolute;
    top: 0px;
    right: 0px;
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 300px;

    img {
      height: 50px;
      transition: 0.1s ease;
    }
  }
  .layer-4 {
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 300px;
    img {
      height: 50px;
      transition: 0.1s ease;
    }
  }

  .background-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 600px;
    z-index: 1;

    @media (max-width: 1024px){
      height: 400px;
    }

    @media (max-width: 425px){
      left: 65%;
      height: 300px;
    }
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