import { NavWrapper } from "./styled"
import logo from './images/logo.png'
import logoDark from './images/logodark.png'
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { Link } from 'react-scroll'


interface Iprops {
  setOpenContact: (data: boolean) => void;
  setChangeTheme: (number: boolean) => void
  changeTheme: boolean
  textColor: string
  textColorHover: string
}
export const Navbar: React.FC<Iprops> = ({
    setOpenContact, 
    setChangeTheme, 
    changeTheme, 
    textColor,
    textColorHover
}) => {


  const [move, setMove] = useState<string>('translateY(-100px)')

  
  let scroll = useScrollYPosition()


  useEffect(() => {
    if (scroll > 0) return setMove('translateY(-100px)')
    setMove('translateY(0px)')
  },[scroll])


 

  return (
    <NavWrapper move={move} textColor={textColor} textColorHover={textColorHover}>
      <div onClick={() => window.location.reload()}>
        <img src={changeTheme ? logoDark : logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link smooth={true} to='personal'>
          Personal Projects
          <span/>
          </Link>
        </li>
        <li>
          <Link smooth={true} to='technologies'>
          Technologies Used
          <span/>
          </Link>
        </li>
        
        <li
          onClick={() => setOpenContact(true)} 
          >Contact<span/>
        </li>
        <li onClick={() => setChangeTheme(!changeTheme)}>
          <WiMoonAltFirstQuarter size={25}/>
          <span/>
        </li>
      </ul>
    </NavWrapper>
  )
}
