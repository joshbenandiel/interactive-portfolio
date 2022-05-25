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

export const Navbar: React.FC<IProps> = ({openWorks, setOpenWorks, openContact, setOpenContact}) => {
  return (
    <>
    {openWorks ? (
      <ButtonContainer>
        <button onClick={() => setOpenWorks(false)}><MdClose size={30}/>Close</button>
      </ButtonContainer>
    )
  : (
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
          <li onClick={() => setOpenWorks(true)}>All Works<span/></li>
          <li onClick={() => setOpenContact(!openContact)}>Contact<span/></li>
        </ul>
      </NavWrapper>
    </NavbarContainer>
  )}
  </>
  )
}

