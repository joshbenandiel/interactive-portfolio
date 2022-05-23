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
        <li><a href="https://www.facebook.com/joshbenandiel/" target="_blank" rel="noreferrer">Facebook</a><span/></li>
        <li><a href="https://www.linkedin.com/in/joshua-jacinto-b357541b2/" target="_blank" rel="noreferrer">Linkedin</a><span/></li>
        <li><a href="https://github.com/joshbenandiel" target="_blank" rel="noreferrer">Github</a><span/></li>
        <li><a href="https://instagram.com/joshbenandiel/" target="_blank" rel="noreferrer">Instagram</a><span/></li>
      </ul>
      <p>© 2022 Joshua Jacinto - <span>Contact</span></p>
    </Container>
  )
}
