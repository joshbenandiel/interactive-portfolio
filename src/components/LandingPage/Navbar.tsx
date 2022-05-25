import { ArrowLeft, ButtonContainer, NavbarContainer, NavWrapper } from "./styled"
import logo from '../Navbar/images/logo.png'
import { Link } from 'react-router-dom'
import {MdClose} from 'react-icons/md'

interface IProps {
  openWorks: boolean;
  setOpenWorks: (data: boolean) => void
  openContact: boolean
  setOpenContact: (data: boolean) => void
}

export const Navbar: React.FC<IProps> = ({setOpenWorks, openContact, setOpenContact}) => {
  return (
    <NavbarContainer>
      <NavWrapper>
        {!openContact && (
          <>
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
            <li onClick={() => setOpenWorks(true)}>All Works<span/></li>
            <li onClick={() => setOpenContact(true)}>Contact<span/></li>
          </ul>
          </>
        )}
      </NavWrapper>
    </NavbarContainer>
  )
}

