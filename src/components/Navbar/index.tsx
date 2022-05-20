import { NavWrapper } from "./styled"
import logo from './images/logo.png'
import logoDark from './images/logodark.png'
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { WiMoonAltFirstQuarter } from 'react-icons/wi'


interface Iprops {
  setOpenContact: (data: boolean) => void;
  worksRef: React.MutableRefObject<undefined> | any
  techRef: React.MutableRefObject<undefined> | any
  setChangeTheme: (number: boolean) => void
  changeTheme: boolean
  textColor: string
  textColorHover: string
}
export const Navbar: React.FC<Iprops> = ({
    setOpenContact, 
    worksRef, 
    techRef, 
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


  const gotoWorkSection = () => {
    worksRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }
  const gotoTechSection = () => {
    techRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }

  return (
    <NavWrapper move={move} textColor={textColor} textColorHover={textColorHover}>
      <div onClick={() => window.location.reload()}>
        <img src={changeTheme ? logoDark : logo} alt="logo" />
      </div>
      <ul>
        <li onClick={gotoWorkSection}>Personal Projects<span/></li>
        <li onClick={gotoTechSection}>Technologies Used<span/></li>
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
