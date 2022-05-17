import { NavWrapper } from "./styled"

export const Navbar: React.FC = () => {

  return (
    <NavWrapper>
      <div onClick={() => window.location.reload()}>Logo</div>
      <ul>
        <li>Personal Projects<span/></li>
        <li>Technologies Used<span/></li>
        <li>Contact<span/></li>
      </ul>
    </NavWrapper>
  )
}
