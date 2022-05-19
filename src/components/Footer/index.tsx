import { Container } from "./styled"
import logo from '../Navbar/images/logo.png'



export const index = () => {

  const executeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
  }
  return (
    <Container>
      <div onClick={executeScroll}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Facebook<span/></li>
        <li>Linkedin<span/></li>
        <li>Github<span/></li>
        <li>Instagram<span/></li>
      </ul>
      <p>© 2022 Joshua Jacinto - <span>Contact</span></p>
    </Container>
  )
}
