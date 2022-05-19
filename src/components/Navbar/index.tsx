import { NavWrapper } from "./styled"
import logo from './images/logo.png'

export const Navbar: React.FC = () => {

  return (
    <NavWrapper>
      <div onClick={() => window.location.reload()}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Personal Projects<span/></li>
        <li>Technologies Used<span/></li>
        <li>Contact<span/></li>
      </ul>
    </NavWrapper>
  )
}
