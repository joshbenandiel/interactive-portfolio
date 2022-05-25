import { ArrowLeft, NavbarContainer, NavWrapper } from "./styled"
import logo from '../Navbar/images/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavWrapper>
          <img src={logo} alt='logo'/>
          <ul>  
            <Link className='home-link' to='/'>
              <div className='home-hover'>
                <div className='arrow-relative'>
                  <ArrowLeft>&#10230;</ArrowLeft>
                </div>
                <li className='home'>Turn Back Home<span/></li>
              </div>
            </Link>
            <li>All Works<span/></li>
            <li>Contact<span/></li>
          </ul>
      </NavWrapper>

    </NavbarContainer>
  )
}

