import { NavWrapper } from "./styled"
import logo from './images/logo.png'
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";


interface Iprops {
  setOpenContact: (data: boolean) => void;
  worksRef: React.MutableRefObject<undefined> | any
  techRef: React.MutableRefObject<undefined> | any
}
export const Navbar: React.FC<Iprops> = ({setOpenContact, worksRef, techRef}) => {


  const [position, setPosition] = useState<boolean>(false)
  const [move, setMove] = useState<string>('translateY(-100px)')

  
  let scroll = useScrollYPosition()


  useEffect(() => {
    if (scroll > 0) return setMove('translateY(-100px)')
    setMove('translateY(0px)')
  },[scroll])


  const gotoWorkSection = () => window.scrollTo({top: worksRef.current.offsetTop, behavior: 'smooth'})
  const gotoTechSection = () => window.scrollTo({top: techRef.current.offsetTop, behavior: 'smooth'})

  return (
    <NavWrapper move={move}>
      <div onClick={() => window.location.reload()}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li onClick={gotoWorkSection}>Personal Projects<span/></li>
        <li onClick={gotoTechSection}>Technologies Used<span/></li>
        <li
          onClick={() => setOpenContact(true)} 
          >Contact<span/></li>
      </ul>
    </NavWrapper>
  )
}
