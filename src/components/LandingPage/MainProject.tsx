import { useEffect } from "react"
import { Project, VisitPage } from "./styled"
import AOS from 'aos'
import {BsArrowRight} from 'react-icons/bs'

export const MainProject = () => {

  useEffect(() => {
    AOS.init();
  },[])
  return (
    <Project>
      <div>
        <h2>The Project</h2>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <span>Landing Page</span>
      <VisitPage>
        <button data-aos="fade-up" data-aos-delay="50">
          Visit Website
          <BsArrowRight className='project-right-arrow' size={30}/>
        </button>
      </VisitPage>
    </Project>
  )
}
